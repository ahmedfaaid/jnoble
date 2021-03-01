import { InputType, Field } from '@nestjs/graphql';
import { AddressInput } from 'src/address/address.entity';

@InputType()
export class EmployerInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  industry: string;
}

@InputType()
export class EmployerUpdateInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  industry?: string;

  @Field({ nullable: true })
  address?: AddressInput;
}
