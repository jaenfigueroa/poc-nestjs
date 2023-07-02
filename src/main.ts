import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //AGREGAMOS ESTO PARA PODER USAR LAS VALIDACIONES DE CLASES DE NESTJS
  await app.listen(3000);
}
bootstrap();
