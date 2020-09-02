import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Job } from 'src/job/job.entity';

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

  @Column()
  @Field()
  email: string;

  @Column()
  password: string;

  @OneToMany(
    () => Job,
    myJob => myJob.id,
    { nullable: true },
  )
  @Field(() => [Job], { nullable: true })
  myJobs: Job[];

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
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
