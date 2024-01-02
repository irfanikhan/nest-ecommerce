import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Store } from './store.entity';

@Entity()
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
