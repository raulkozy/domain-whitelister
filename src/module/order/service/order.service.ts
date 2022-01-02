import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { identity } from 'rxjs';
import { DomainDocument } from 'src/module/domain/schemas/domain.schema';
import { CreateOrderDto } from '../model/dto/create-order.dto';
import { listOrdersQueryDto } from '../model/dto/list-order.dto';
import { orderMapper } from '../model/mapper';
import { OrderDocument } from '../schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order')
    private readonly _orderModel: Model<OrderDocument>,
    @InjectModel('Domain')
    private readonly _domainModel: Model<DomainDocument>,
  ) {}

  async create(data: CreateOrderDto) {

    let domain = await this._domainModel.findOne({
      name: data.urlOfSale,
      isActive: true
    })
    .catch(error => {
      throw new InternalServerErrorException(`Error in domain search... ${error.message}`)
    })

    if(!domain){
      throw new BadRequestException(`domain not found...`)
    }

    let order = await new this._orderModel({
      orderId: data.orderId,
      createdAt: data.createdAt ? data.createdAt : null,
      orderDate: data.orderDate,
      productIds: [...data.productIds],
      currency: data.currency.toUpperCase(),
      price: data.price,
      urlOfSale: data.urlOfSale,
    })
      .save()
      .catch((error) => {
        throw new InternalServerErrorException(
          `Error while storing the order details...${error.message}`,
        );
      });

    return {
      id: order._id,
    };
  }

  async findAll(query: listOrdersQueryDto) {
    let orders: any = await this._orderModel
      .find()
      .skip(query.skip)
      .limit(query.limit)
      .sort({ [query.orderBy]: query.sortOrder })
      .exec();

    if (orders.length <= 0) {
      throw new NotFoundException(`No orders found...`);
    }

    return orders.map(orderMapper.toOrderListRs);
  }
}
