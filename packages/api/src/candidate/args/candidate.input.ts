import { InputType, Field } from '@nestjs/graphql';

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

  @Field({ nullable: true })
  email: string;

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
