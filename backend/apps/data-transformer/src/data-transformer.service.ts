import { Injectable } from '@nestjs/common';

@Injectable()
export class DataTransformerService {
  getHello(): string {
    return 'Hello World!';
  }
}
