import { ApiProperty } from '@nestjs/swagger';

export class CreateDomainDto {
  @ApiProperty({ required: true })
  readonly domainName: string;

  readonly isActive: boolean;
}
