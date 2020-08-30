import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class TalentResolver {
  @Query(() => String)
  talent(): string {
    return 'I am a talented person';
  }
}
