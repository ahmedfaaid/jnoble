import { InputType, Field, Int } from '@nestjs/graphql';
import { AddressInput } from 'src/address/address.entity';
// import { Employer } from 'src/employer/employer.entity';

// TODO: make some of these fields nullable
@InputType()
export class CandidateInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  middleName: string;

  @Field({ nullable: true })
  preferredName: string;

  @Field()
  dateOfBirth: string;

  @Field()
  jobTitle: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password?: string;

  @Field(() => Int, { nullable: true })
  employerId?: number;

  @Field(() => [String])
  languages: string[];

  @Field(() => [String])
  skills: string[];

  @Field({ nullable: true })
  validDriversLicense: boolean;

  @Field({ nullable: true })
  ownVehicle: boolean;

  @Field()
  statusInCanada: string;

  @Field()
  available: boolean;
}

@InputType()
export class CandidateUpdateInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field({ nullable: true })
  preferredName?: string;

  @Field({ nullable: true })
  dateOfBirth?: string;

  @Field({ nullable: true })
  jobTitle?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  address?: AddressInput;

  @Field(() => [String], { nullable: true })
  languages?: string[];

  @Field(() => [String], { nullable: true })
  skills?: string[];

  @Field({ nullable: true })
  validDriversLicense?: boolean;

  @Field({ nullable: true })
  ownVehicle?: boolean;

  @Field({ nullable: true })
  statusInCanada?: string;

  @Field({ nullable: true })
  available?: boolean;
}
