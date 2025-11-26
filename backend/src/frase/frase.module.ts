import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FraseService } from './frase.service';
import { FraseController } from './frase.controller';
import { Frase } from './frase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Frase])],
  controllers: [FraseController],
  providers: [FraseService],
})
export class FraseModule {}
