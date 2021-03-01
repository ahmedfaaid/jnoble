import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Address } from 'src/address/address.entity';
import { Candidate } from 'src/candidate/candidate.entity';
import { SubUser } from 'src/sub-user/sub-user.entity';

@ObjectType()
@Entity()
export class Employer {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column()
  @Field()
  phone: string;

  @Column()
  @Field()
  industry: string;

  @OneToOne(() => Address, address => address.employer, {
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'address_id' })
  @Field(() => Address)
  address: Address;

  @OneToMany(() => Candidate, candidate => candidate.employer, {
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'employees_id' })
  @Field(() => [Candidate], { nullable: true })
  employees?: Candidate[];

  @OneToMany(() => SubUser, sub => sub.employer)
  @JoinColumn({ name: 'sub_id' })
  @Field(() => [SubUser])
  sub: SubUser[];

  @CreateDateColumn({ name: 'created_at' })
  @Field()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field()
  updatedAt: string;
}
