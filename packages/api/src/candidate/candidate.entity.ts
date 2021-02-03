import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Address } from '../address/address.entity';

// TODO: Make some of these fields nullable
@ObjectType()
@Entity()
export class Candidate {
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
  middleName: string;

  @Column({ name: 'preferred_name', nullable: true })
  @Field({ nullable: true })
  preferredName: string;

  @Column({ name: 'date_of_birth' })
  @Field()
  dateOfBirth: string;

  @Column({ name: 'job_title' })
  @Field()
  jobTitle: string;

  @Column()
  @Field()
  phone: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @OneToOne(() => Address, address => address.candidate, {
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'address_id' })
  @Field(() => Address)
  address: Address;

  @Column('text', { array: true, nullable: true })
  @Field(() => [String])
  languages: string[];

  @Column('text', { array: true, nullable: true })
  @Field(() => [String])
  skills: string[];

  @Column({ name: 'valid_drivers_license', nullable: true })
  @Field()
  validDriversLicense: boolean;

  @Column({ name: 'own_vehicle', nullable: true })
  @Field()
  ownVehicle: boolean;

  @Column({ name: 'status_in_canada' })
  @Field()
  statusInCanada: string;

  @Column()
  @Field()
  available: boolean;

  @CreateDateColumn({ name: 'created_at' })
  @Field()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field()
  updatedAt: string;
}

@ObjectType()
export class AllCandidatesResponse {
  @Field(() => [Candidate])
  items: Candidate[];

  @Field(() => Int)
  count: number;
}
