import { PartialType } from '@nestjs/mapped-types';
import { ApiBody, ApiProperty } from '@nestjs/swagger';
import { CreateDomainDto } from './create-domain.dto';

export class UpdateDomainDto {
  @ApiProperty({ required: true })
  readonly domainName: string;

  @ApiProperty({ required: true })
  readonly isActive: boolean;
}
