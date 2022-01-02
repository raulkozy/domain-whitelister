import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { log } from 'console';
import databaseConfig from './config/database.config';
import { DomainModule } from './module/domain/domain.module';
import { OrderModule } from './module/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    MongooseModule.forRoot(
      `mongodb://${databaseConfig().database.host}/${
        databaseConfig().database.collection
      }`,
    ),
    DomainModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
