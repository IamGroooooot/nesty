import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8443);
}

bootstrap();
