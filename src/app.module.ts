import { Module } from '@nestjs/common';
import * as config from 'config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import entities from './utils/entities';

console.log(config);

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      ...config.get('mysql'),
      entities,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
