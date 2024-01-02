import { Category } from 'src/categories/entities/category.entity';
import { Store } from 'src/stores/entities/store.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ unique: true })
  sku: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  discountedPrice: number;

  @Column()
  quantityInStock: number;

  @Column({ nullable: true })
  brand: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column()
  categoryId: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column()
  @JoinColumn({ name: 'storeId' })
  storeId: string;

  @ManyToOne(() => Store)
  store: Store;

  @Column({ default: true })
  isActive: boolean;
}
