import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { JobApplication } from 'src/job/jobApplication.entity';

@ObjectType()
@Entity()
export class Talent {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ name: 'first_name' })
  @Field()
  firstName: string;

  @Column({ name: 'middle_name', nullable: true })
  @Field({ nullable: true })
  middleName: string;

  @Column({ name: 'last_name' })
  @Field()
  lastName: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column()
  password: string;

  @OneToMany(
    () => JobApplication,
    jobApplications => jobApplications.applicant,
    { nullable: true },
  )
  @Field(() => [JobApplication], { nullable: true })
  jobApplications: JobApplication[];

  @Column({ default: 'talent' })
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
export class TalentInput {
  @Field()
  firstName: string;

  @Field({ nullable: true })
  middleName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
