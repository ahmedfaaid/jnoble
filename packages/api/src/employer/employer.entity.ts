import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Job } from '../job/job.entity';

@ObjectType()
@Entity()
export class Employer {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ name: 'company_name' })
  @Field()
  companyName: string;

  @Column({ name: 'company_email', unique: true })
  @Field()
  companyEmail: string;

  @Column()
  password: string;

  @OneToMany(
    () => Job,
    jobs => jobs.employer,
    { nullable: true },
  )
  @Field(() => [Job], { nullable: true })
  jobs: Job[];

  @Column({ default: 'employer' })
  @Field({ nullable: true })
  role: string;

  @CreateDateColumn({ name: 'created_at' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field()
  updatedAt: Date;
}

@InputType()
export class EmployerInput {
  @Field()
  companyName: string;

  @Field()
  companyEmail: string;

  @Field()
  password: string;
}
