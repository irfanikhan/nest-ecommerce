import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductDto } from './dtos/update-product.dto';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  create(product: CreateProductDto) {
    return this.productRepository.create(product);
  }

  async update(id: number, product: UpdateProductDto) {
    this.findOne(id);

    return this.productRepository.update({ id }, product);
  }

  async remove(id: number) {
    this.findOne(id);

    return this.productRepository.delete(id);
  }
}
