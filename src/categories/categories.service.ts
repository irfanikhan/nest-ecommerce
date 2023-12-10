import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOneBy({ id });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  create(category: CreateCategoryDto) {
    return this.categoryRepository.create(category);
  }

  async update(id: number, category: UpdateCategoryDto) {
    this.findOne(id);

    return this.categoryRepository.update({ id }, category);
  }

  async delete(id: number) {
    this.findOne(id);

    return this.categoryRepository.delete({ id });
  }
}
