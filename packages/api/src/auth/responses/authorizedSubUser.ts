import { Field, ObjectType } from '@nestjs/graphql';
import { SubUser } from 'src/sub-user/sub-user.entity';

@ObjectType()
export class AuthorizedSubUser {
  @Field(() => SubUser)
  subUser: SubUser;

  @Field()
  token: string;
}
