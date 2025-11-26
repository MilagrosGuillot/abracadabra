import { Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  // Probar backend
  @Get()
  getBackendStatus() {
    return { ok: true, msg: 'Backend funcionando correctamente' };
  }

  // Probar conexión a la DB
  @Get('db')
  async testDB() {
    const ok = await this.testService.testDB();
    return ok
      ? { ok: true, msg: 'Conexión a la Database OK' }
      : { ok: false, msg: 'ERROR conectando a la DB' };
  }

  // Insertar una frase
  @Post('frase')
  insertarFrase() {
    return this.testService.insertarFraseEjemplo();
  }
}
