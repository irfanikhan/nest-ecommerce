import { UserProfile } from 'src/users/entities/user-profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserProfile, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: UserProfile;

  @Column({
    type: 'enum',
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  })
  status: string;

  @Column()
  shippingAddress: string;

  @Column()
  billingAddress: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  totalPrice: number;

  @Column({
    type: 'enum',
    enum: ['paid', 'pending', 'failed'],
    default: 'pending',
  })
  paymentStatus: string;

  @Column()
  paymentMethod: string;

  @ManyToOne(() => OrderItem)
  items: OrderItem[];

  @Column({ nullable: true })
  shippingMethod: string;

  @Column({ nullable: true })
  promotionsDiscounts: string;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  invoiceNumber: string;

  @Column({ nullable: true })
  trackingInfo: string;

  @Column({ nullable: true })
  refundStatus: string;

  @Column()
  currency: string;

  @Column()
  customerEmail: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  deliveryInstructions: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
