import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Employer } from '../employer/employer.entity';
import { Talent } from '../talent/talent.entity';
import { JobApplication } from './jobApplication.entity';

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
  @JoinColumn({ name: 'employer_id' })
  employer: Employer;

  @OneToMany(
    () => JobApplication,
    jobApplications => jobApplications.job,
    {
      nullable: true,
    },
  )
  @Field(() => [JobApplication], { nullable: true })
  jobApplications: JobApplication[];

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
