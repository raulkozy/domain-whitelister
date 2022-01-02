import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from '../model/dto/create-order.dto';
import { listOrdersQueryDto } from '../model/dto/list-order.dto';
import { OrderService } from '../service/order.service';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll(@Query() query: listOrdersQueryDto) {
    return this.orderService.findAll(query);
  }
}
