import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { InputType, ObjectType, Field, Int } from '@nestjs/graphql';
import { Province } from './province.entity';
import { Candidate } from 'src/candidate/candidate.entity';

@ObjectType()
@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @OneToOne(() => Candidate, candidate => candidate.address)
  @JoinColumn({ name: 'candidate_id' })
  @Field()
  candidate: Candidate;

  @Column({ name: 'address_1' })
  @Field()
  address1: string;

  @Column({ name: 'address_2', nullable: true })
  @Field({ nullable: true })
  address2?: string;

  @Column()
  @Field()
  city: string;

  @ManyToOne(() => Province, province => province.address)
  @JoinColumn({ name: 'province_id' })
  @Field()
  province: Province;

  @Column({ name: 'postal_code' })
  @Field()
  postalCode: string;

  @Column()
  @Field()
  country: string;

  @CreateDateColumn({ name: 'created_at' })
  @Field()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field()
  updatedAt: string;
}

@InputType()
export class AddressInput {
  @Field()
  address1: string;

  @Field({ nullable: true })
  address2: string;

  @Field()
  city: string;

  @Field()
  postalCode: string;

  @Field()
  country: string;
}
