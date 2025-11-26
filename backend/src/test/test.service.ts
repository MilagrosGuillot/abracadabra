import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Frase } from '../frase/frase.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Frase)
    private fraseRepo: Repository<Frase>,
  ) {}

  async testDB() {
    try {
      await this.fraseRepo.query('SELECT 1');
      return true;
    } catch {
      return false;
    }
  }

  async insertarFraseEjemplo() {
    const frase = this.fraseRepo.create({
      titulo: 'Frase de prueba',
      texto: 'Texto generado desde /test/frase',
    });
    return this.fraseRepo.save(frase);
  }
}
