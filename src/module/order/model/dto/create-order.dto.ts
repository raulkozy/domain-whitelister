import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ required: true })
  readonly orderId: string;
  @ApiProperty({ required: true })
  readonly createdAt: Date;
  @ApiProperty({ required: true })
  readonly orderDate: Date;
  @ApiProperty({ type: Array })
  readonly productIds: string[];
  @ApiProperty({ required: true })
  readonly currency: string;
  @ApiProperty({ required: true })
  readonly price: number;
  @ApiProperty({ required: true })
  readonly URL_sale: string;
}
