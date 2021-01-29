import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CandidateBulkInput {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field({ nullable: true })
  middle_name: string;

  @Field({ nullable: true })
  preferred_name: string;

  @Field()
  date_of_birth: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  email: string;

  @Field(() => [String], { nullable: true })
  languages: string[];

  @Field(() => [String], { nullable: true })
  skills: string[];

  @Field({ nullable: true })
  valid_drivers_license: boolean;

  @Field({ nullable: true })
  own_vehicle: boolean;

  @Field({ nullable: true })
  status_in_canada: string;

  @Field()
  available: boolean;

  @Field()
  address_1: string;

  @Field({ nullable: true })
  address_2: string;

  @Field()
  city: string;

  @Field()
  province: string;

  @Field()
  postal_code: string;

  @Field()
  country: string;
}
