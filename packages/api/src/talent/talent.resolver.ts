import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Talent, TalentInput } from './talent.entity';
import { TalentService } from './talent.service';

@Resolver()
export class TalentResolver {
  constructor(private readonly talentService: TalentService) {}

  @Query(() => [Talent])
  async talents(): Promise<Talent[]> {
    return await this.talentService.findAll();
  }

  @Mutation(() => Talent)
  async createTalent(@Args('input') input: TalentInput): Promise<Talent> {
    return await this.talentService.create(input);
  }
}
