import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { getModelToken } from '@nestjs/mongoose';

describe('CategoryService', () => {
  let service: CategoryService;

  const categoryModel = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: getModelToken('Category'),
          useValue: categoryModel,
        },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
