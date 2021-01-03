import { InputType, Field } from '@nestjs/graphql';

// TODO: make some of these fields nullable
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

  @Field({ nullable: true })
  email?: string;

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
