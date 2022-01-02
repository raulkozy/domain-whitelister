import { Module } from '@nestjs/common';
import { DomainController } from './controller/domain.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainSchema } from './schemas/domain.schema';
import { DomainService } from './service/domain.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Domain', schema: DomainSchema }]),
  ],
  controllers: [DomainController],
  providers: [DomainService],
})
export class DomainModule {}
