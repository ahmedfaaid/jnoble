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

  @Column({ name: 'other_names', nullable: true })
  @Field({ nullable: true })
  otherNames?: string;

  @Column()
  @Field()
  phone: string;

  @Column({ unique: true, nullable: true })
  @Field({ nullable: true })
  email: string;

  @OneToOne(() => Address, address => address.candidate, {
    cascade: true,
    onDelete: 'CASCADE',
  })
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
