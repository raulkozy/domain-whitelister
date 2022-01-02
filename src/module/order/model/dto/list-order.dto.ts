import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { orderByEnum, sortOrderEnum } from '../enum';

export class listOrdersQueryDto {
  @ApiProperty({ required: false, type: Number })
  @IsOptional()
  @Min(0)
  skip?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Type()
  @IsOptional()
  @Min(1)
  limit?: number;

  @ApiProperty({
    required: true,
    enum: orderByEnum,
    default: orderByEnum.CREATED_AT,
  })
  orderBy: orderByEnum = orderByEnum.CREATED_AT;

  @ApiProperty({
    required: true,
    enum: sortOrderEnum,
    default: sortOrderEnum.ASC,
  })
  sortOrder: sortOrderEnum;
}

export class orderListRs {
  id: string;
  orderId: string;
  urlSale: string;
  price: number;
  currency: number;
  productIds: string[];
  orderDate: Date;
  createdDate: Date;
}
