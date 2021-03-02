import { InputType, Field } from '@nestjs/graphql';
import { Role } from '../sub-user.entity';

@InputType()
export class SubUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field()
  jobTitle: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  role?: Role;
}

@InputType()
export class SubUserUpdateInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field({ nullable: true })
  jobTitle?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;
}
