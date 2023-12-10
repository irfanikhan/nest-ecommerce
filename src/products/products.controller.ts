import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(parseInt(id));
  }

  @Post()
  createProduct(@Body() product: CreateProductDto) {
    return this.productsService.create(product);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, updateProduct: UpdateProductDto) {
    return this.productsService.update(parseInt(id), updateProduct);
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return this.productsService.remove(parseInt(id));
  }
}
