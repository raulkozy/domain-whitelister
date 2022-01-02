import { ApiProperty } from '@nestjs/swagger';
import { Matches } from 'class-validator';

export class CreateDomainDto {
  @ApiProperty({ required: true })
  @Matches(`^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{2,6}$`,"",{
    message: 'Please enter a valid domain'
  })
  readonly domainName: string;

  readonly isActive: boolean;
}
