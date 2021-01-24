import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CandidateBulkInput {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field({ nullable: true })
  other_names: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  email: string;

  @Field(() => [String], { nullable: true })
  languages: string[];

  @Field(() => [String], { nullable: true })
  skills: string[];

  @Field({ nullable: true })
  own_vehicle: boolean;

  @Field({ nullable: true })
  status_in_canada: string;

  @Field({ nullable: true })
  status_expiry: string;

  @Field({ nullable: true })
  health_card_number: string;

  @Field({ nullable: true })
  medical_information: string;

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
