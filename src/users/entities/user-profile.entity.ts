import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Store } from 'src/stores/entities/store.entity';
import { Address } from 'src/address/entities/address.entity';
import { Order } from 'src/orders/entities/order.entity';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.userProfile)
  @JoinColumn()
  user: User;

  @Column()
  full_name: string;

  @Column()
  phone_number: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Store, (store) => store.owner)
  stores: Store[];

  @Column()
  preferences: string;
}
