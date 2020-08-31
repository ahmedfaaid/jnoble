import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Employer } from '../employer/employer.entity';

@ObjectType()
@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @ManyToOne(
    () => Employer,
    employer => employer.jobs,
  )
  @Field(() => Employer)
  employer: Employer;

  @CreateDateColumn({ name: 'created_at' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field()
  updatedAt: Date;
}

@InputType()
export class JobInput {
  @Field()
  title: string;

  @Field()
  description: string;
}
