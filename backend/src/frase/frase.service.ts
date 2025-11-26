import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Frase } from './frase.entity';

@Injectable()
export class FraseService {
  constructor(
    @InjectRepository(Frase)
    private fraseRepository: Repository<Frase>,
  ) {}

  findAll(): Promise<Frase[]> {
    return this.fraseRepository.find();
  }

  create(data: { titulo: string; texto: string }): Promise<Frase> {
    const frase = this.fraseRepository.create(data);
    return this.fraseRepository.save(frase);
  }
}
