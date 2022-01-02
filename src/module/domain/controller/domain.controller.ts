import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateDomainDto } from '../model/dto/create-domain.dto';
import { UpdateDomainDto } from '../model/dto/update-domain.dto';
import { DomainService } from '../service/domain.service';

@ApiTags('Domain')
@Controller('domain')
export class DomainController {
  constructor(private readonly domainService: DomainService) {}

  @Post()
  create(@Body() createDomainDto: CreateDomainDto) {
    return this.domainService.create(createDomainDto);
  }

  @Get()
  findAll() {
    return this.domainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.domainService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDomainDto: UpdateDomainDto) {
    return this.domainService.update(id, updateDomainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.domainService.remove(id);
  }
}
