import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { InputType, ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Employer {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ name: 'company_name' })
  @Field()
  companyName: string;

  @Column({ name: 'company_email' })
  @Field()
  companyEmail: string;

  @Column()
  password: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
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
