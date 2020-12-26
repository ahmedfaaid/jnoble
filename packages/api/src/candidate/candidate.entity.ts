import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { InputType, ObjectType, Field, Int } from '@nestjs/graphql';
import { Address } from '../address/address.entity';

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

  @Column({ name: 'other_names', nullable: true })
  @Field({ nullable: true })
  otherNames?: string;

  @Column()
  @Field()
  phone: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @OneToOne(() => Address, address => address.candidate)
  @JoinColumn({ name: 'address_id' })
  @Field(() => Address)
  address: Address;

  @Column('text', { array: true })
  @Field(() => [String])
  languages: string[];

  @Column('text', { array: true })
  @Field(() => [String])
  skills: string[];

  @Column({ name: 'own_vehicle' })
  @Field()
  ownVehicle: boolean;

  @Column({ name: 'status_in_canada' })
  @Field()
  statusInCanada: string;

  @Column({ name: 'status_expiry', nullable: true })
  @Field({ nullable: true })
  statusExpiry?: string;

  @Column({ name: 'health_card_number' })
  @Field()
  healthCardNumber: string;

  @Column({ name: 'medical_information' })
  @Field()
  medicalInformation: string;

  @CreateDateColumn({ name: 'created_at' })
  @Field()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field()
  updatedAt: string;
}

@InputType()
export class CandidateInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  otherNames?: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field(() => [String])
  languages: string[];

  @Field(() => [String])
  skills: string[];

  @Field()
  ownVehicle: boolean;

  @Field()
  statusInCanada: string;

  @Field({ nullable: true })
  statusExpiry: string;

  @Field()
  healthCardNumber: string;

  @Field()
  medicalInformation: string;
}
