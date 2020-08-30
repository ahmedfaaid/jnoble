import { Resolver, Query } from '@nestjs/graphql';
import { Talent } from './talent.entity';
import { TalentService } from './talent.service';

@Resolver()
export class TalentResolver {
  constructor(private readonly talentService: TalentService) {}

  @Query(() => [Talent])
  async talents(): Promise<Talent[]> {
    return await this.talentService.findAll();
  }
}
