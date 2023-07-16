import { Controller, Get } from '@nestjs/common';
import { DataTransformerService } from './data-transformer.service';

@Controller()
export class DataTransformerController {
  constructor(private readonly dataTransformerService: DataTransformerService) {}

  @Get()
  getHello(): string {
    return this.dataTransformerService.getHello();
  }
}
