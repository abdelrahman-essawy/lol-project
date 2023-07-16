import { Test, TestingModule } from '@nestjs/testing';
import { DataTransformerController } from './data-transformer.controller';
import { DataTransformerService } from './data-transformer.service';

describe('DataTransformerController', () => {
  let dataTransformerController: DataTransformerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DataTransformerController],
      providers: [DataTransformerService],
    }).compile();

    dataTransformerController = app.get<DataTransformerController>(DataTransformerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dataTransformerController.getHello()).toBe('Hello World!');
    });
  });
});
