import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Frase } from './frase/frase.entity';
import { FraseService } from './frase/frase.service';
import { FraseController } from './frase/frase.controller';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
   TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Frase],
  synchronize: true,
})
,
    TypeOrmModule.forFeature([Frase]),
  ],
  controllers: [FraseController, TestController],
  providers: [FraseService,   TestService],
})
export class AppModule {}
