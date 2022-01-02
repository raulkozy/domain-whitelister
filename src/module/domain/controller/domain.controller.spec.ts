import { Test, TestingModule } from '@nestjs/testing';
import { DomainService } from '../service/domain.service';
import { DomainController } from './domain.controller';

describe('DomainController', () => {
  let controller: DomainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DomainController],
      providers: [DomainService],
    }).compile();

    controller = module.get<DomainController>(DomainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
