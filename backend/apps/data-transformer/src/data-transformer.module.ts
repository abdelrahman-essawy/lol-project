import { Module } from '@nestjs/common';
import { DataTransformerController } from './data-transformer.controller';
import { DataTransformerService } from './data-transformer.service';

@Module({
  imports: [],
  controllers: [DataTransformerController],
  providers: [DataTransformerService],
})
export class DataTransformerModule {}
