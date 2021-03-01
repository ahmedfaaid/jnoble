import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Employer } from 'src/employer/employer.entity';

@ObjectType()
@Entity()
export class SubUser {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ name: 'first_name' })
  @Field()
  firstName: string;

  @Column({ name: 'last_name' })
  @Field()
  lastName: string;

  @Column({ name: 'middle_name', nullable: true })
  @Field({ nullable: true })
  middleName?: string;

  @Column({ name: 'job_title' })
  @Field()
  jobTitle: string;

  @Column()
  @Field()
  phone: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column({ nullable: true })
  password?: string;

  @ManyToOne(() => Employer, employer => employer.sub)
  @Field(() => Employer)
  employer: Employer;

  @Column()
  @Field(() => Role)
  role: Role;

  @CreateDateColumn({ name: 'created_at' })
  @Field()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field()
  updatedAt: string;
}

export enum Role {
  ADMIN,
  MAN,
}

registerEnumType(Role, {
  name: 'Role',
});
