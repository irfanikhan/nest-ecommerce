import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Store } from './store.entity';

export class OpeningHours {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day: string;

  @Column()
  open: string;

  @Column()
  close: string;

  @ManyToOne(() => Store, (store) => store.openingHours)
  store: Store;
}
