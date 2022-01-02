import { ApiProperty } from '@nestjs/swagger';
import { length, Length, Matches, matches } from 'class-validator';
import { isRegExp } from 'util/types';

export class CreateOrderDto {
  @ApiProperty({ required: true })
  readonly orderId: string;
  @ApiProperty({ required: true })
  readonly createdAt: Date;
  @ApiProperty({ required: true })
  readonly orderDate: Date;
  @ApiProperty({ type: Array })
  readonly productIds: string[];
  @ApiProperty({ required: true , default: 'USD'})
  @Length(3)
  readonly currency: string;
  @ApiProperty({ required: true })
  readonly price: number;
  @ApiProperty({ required: true })
  @Matches(`^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{2,6}$`,"",{
    message: 'Please enter a valid domain'
  })
  readonly urlOfSale: string;
}
