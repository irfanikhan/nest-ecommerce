import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';
import { JoinColumn, ManyToOne } from 'typeorm';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  sku: string;

  @IsNumber()
  price: number;

  @IsString()
  discountedPrice: number;

  @IsNumber()
  quantityInStock: number;

  @IsString()
  @IsOptional()
  brand: string;

  @IsString()
  imageUrl: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  categoryId: string;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId' })
  category: Category;
}
