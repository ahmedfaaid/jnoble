import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Job } from './job.entity';
import { Talent } from '../talent/talent.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class JobApplication {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @ManyToOne(
    () => Job,
    job => job.jobApplications,
  )
  @JoinColumn({ name: 'job_id' })
  @Field(() => Job)
  job: Job;

  @ManyToOne(
    () => Talent,
    applicant => applicant.jobApplications,
  )
  @JoinColumn({ name: 'applicant_id' })
  @Field(() => Talent)
  applicant: Talent;
}
