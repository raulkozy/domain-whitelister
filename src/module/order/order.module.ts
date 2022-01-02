import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainSchema } from '../domain/schemas/domain.schema';
import { OrderController } from './controller/order.controller';
import { OrderSchema } from './schemas/order.schema';
import { OrderService } from './service/order.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Domain', schema: DomainSchema},{ name: 'Order', schema: OrderSchema }]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
