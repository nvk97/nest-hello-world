import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType()
@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String, { description: 'ID of the user' })
  id: number;

  @Column()
  @Field(() => String, { description: 'First Name of the User' })
  firstName: string;

  @Column()
  @Field(() => String, { description: 'Middle Name of the User' })
  middleName: string;

  @Column()
  @Field(() => String, { description: 'Last Name of the User' })
  lastName: string;

  @Column()
  @Field(() => String, { description: 'Role of the User' })
  role: string;

  @Column('boolean', { default: true, nullable: true })
  @Field(() => Boolean, { description: 'Is User Active' })
  isActive = true;

  @Column('text', { array: true, nullable: true })
  @Field(() => [String], { description: 'User groups' })
  groups: string[];

  @Column({ nullable: true })
  @Field(() => Int, { description: 'User amount' })
  amount: number;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  @Field(() => Date, { description: 'Timstamp of User creation' })
  createdAt: Date;
}
