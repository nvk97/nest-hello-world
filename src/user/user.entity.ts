import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  middleName: string;
  @Column()
  lastName: string;
  @Column()
  role: string;
  @Column('boolean', { default: true, nullable: true })
  isActive = true;
  @Column('text', { array: true, nullable: true })
  groups: string[];
  @Column({ nullable: true })
  amount: number;
  @CreateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  createdAt: Date;
}
