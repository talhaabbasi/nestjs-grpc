import { Test, TestingModule } from '@nestjs/testing';
import { HerosController } from './heros.controller';

describe('HerosController', () => {
  let controller: HerosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HerosController],
    }).compile();

    controller = module.get<HerosController>(HerosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
