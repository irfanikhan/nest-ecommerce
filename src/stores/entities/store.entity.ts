import { Address } from 'src/address/entities/address.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Product } from 'src/products/entities/product.entity';
import { UserProfile } from 'src/users/entities/user-profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OpeningHours } from './opening-hours.entity';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => UserProfile, (user) => user.stores)
  owner: UserProfile;

  @OneToMany(() => Product, (product) => product.store)
  products: Product[];

  @ManyToMany(() => Category)
  categories: Category[];

  @ManyToOne(() => Address, { cascade: true, nullable: true })
  address: Address;

  @Column({ nullable: true })
  contactEmail: string;

  @Column({ nullable: true })
  contactPhone: string;

  @OneToMany(() => OpeningHours, (openingHours) => openingHours.store, {
    cascade: true,
  })
  openingHours: OpeningHours[];

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  socialMediaLinks: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;
}
