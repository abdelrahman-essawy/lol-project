import { NestFactory } from '@nestjs/core';
import { DataTransformerModule } from './data-transformer.module';

async function bootstrap() {
  const app = await NestFactory.create(DataTransformerModule);
  await app.listen(3000);
}
bootstrap();
