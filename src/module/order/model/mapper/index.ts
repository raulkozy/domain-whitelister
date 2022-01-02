import { orderListRs } from '../dto/list-order.dto';

export class orderMapper {
  static toOrderListRs(order): orderListRs {
    return {
      id: order._id,
      orderId: order.orderId,
      urlSale: order.urlSale,
      price: order.price,
      currency: order.currency,
      productIds: [...order.productIds],
      orderDate: order.orderDate,
      createdDate: order.createdDate,
    };
  }
}
