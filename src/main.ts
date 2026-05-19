import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { myCustomCors } from './config/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(myCustomCors());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
