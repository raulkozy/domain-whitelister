import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true, unique: true })
  orderId: string;

  @Prop({ required: true, default: new Date() })
  createdAt: Date;

  @Prop({ required: true })
  orderDate: Date;

  @Prop({ required: true })
  productIds: string[];

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  urlSale: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
