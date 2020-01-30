import { Test, TestingModule } from '@nestjs/testing';
import { NeoController } from './neo.controller';

describe('Neo Controller', () => {
  let controller: NeoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeoController],
    }).compile();

    controller = module.get<NeoController>(NeoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
