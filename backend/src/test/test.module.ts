import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Frase } from '../frase/frase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Frase])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
