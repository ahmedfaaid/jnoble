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
import { Talent } from '../talent/talent.entity';

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
    { onDelete: 'SET NULL' },
  )
  @Field(() => Employer)
  employer: Employer;

  @ManyToOne(
    () => Talent,
    applications => applications.myJobs,
    {
      nullable: true,
    },
  )
  @Field(() => [Talent], { nullable: true })
  applications: Talent[];

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
