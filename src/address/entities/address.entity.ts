import { UserProfile } from 'src/users/entities/user-profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserProfile, (user) => user.addresses)
  user: UserProfile;

  @Column()
  streetAddress: string;

  @Column({ nullable: true })
  aptSuiteUnit: string;

  @Column()
  city: string;

  @Column()
  stateProvince: string;

  @Column()
  postalCode: string;

  @Column()
  country: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ default: false })
  isDefault: boolean;

  @Column({ nullable: true })
  label: string;

  @Column({ nullable: true })
  latitude: number;

  @Column({ nullable: true })
  longitude: number;

  @Column({ nullable: true })
  formattedAddress: string;

  @Column({ nullable: true })
  placeId: string;

  @Column({ nullable: true })
  googleMapUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;
}
