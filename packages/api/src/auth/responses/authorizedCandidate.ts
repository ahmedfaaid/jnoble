import { Field, ObjectType } from '@nestjs/graphql';
import { Candidate } from 'src/candidate/candidate.entity';

@ObjectType()
export class AuthorizedCandidate {
  @Field(() => Candidate)
  candidate: Candidate;

  @Field()
  token: string;
}
