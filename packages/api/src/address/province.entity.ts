import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { InputType, ObjectType, Field, Int } from '@nestjs/graphql';
import { Address } from './address.entity';

@ObjectType()
@Entity()
export class Province {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  abbr: string;

  @OneToMany(() => Address, address => address.province)
  address: Address[];

  @CreateDateColumn({ name: 'created_at' })
  @Field()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field()
  updatedAt: string;
}

@InputType()
export class ProvinceInput {
  @Field()
  name: string;
}
