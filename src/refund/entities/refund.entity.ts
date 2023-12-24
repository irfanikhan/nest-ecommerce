import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Refund {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  reason: string;

  @Column({
    type: 'enum',
    enum: ['processing', 'approved', 'declined'],
    default: 'processing',
  })
  status: string;

  @Column()
  refundDate: Date;

  @Column()
  refundMethod: string;

  @Column({ nullable: true })
  notes: string;

  @Column()
  creatorUserId: number;

  @ManyToOne(() => User)
  initialUser: User;

  @Column({ nullable: true })
  transactionId: string;

  @Column({ nullable: true })
  attachmentUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
