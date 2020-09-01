import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { Talent, TalentInput } from './talent.entity';
import { TalentService } from './talent.service';
import { MyContext } from 'src/types';

@Resolver()
export class TalentResolver {
  constructor(private readonly talentService: TalentService) {}

  @Query(() => [Talent])
  async talents(): Promise<Talent[]> {
    return await this.talentService.findAll();
  }

  @Query(() => Talent)
  async talent(@Args('id') id: number): Promise<Talent> {
    return await this.talentService.findOne(id);
  }

  @Query(() => Talent)
  async talentLogin(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() ctx: MyContext,
  ): Promise<Talent> {
    return await this.talentService.login(email, password, ctx);
  }

  @Mutation(() => Talent)
  async createTalent(
    @Args('input') input: TalentInput,
    @Context() ctx: MyContext,
  ): Promise<Talent> {
    return await this.talentService.create(input, ctx);
  }
}
