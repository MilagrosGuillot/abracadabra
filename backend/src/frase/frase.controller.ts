import { Controller, Get, Post, Body } from '@nestjs/common';
import { FraseService } from './frase.service';
import { Frase } from './frase.entity';

@Controller('frases')
export class FraseController {
  constructor(private readonly fraseService: FraseService) {}

  @Get()
  findAll(): Promise<Frase[]> {
    return this.fraseService.findAll();
  }

 @Post()
  create(@Body() data: { titulo: string; texto: string }): Promise<Frase> {
    return this.fraseService.create(data);
  }
  
}
