import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { AddressInput } from 'src/address/address.entity';
import { ProvinceInput } from 'src/address/province.entity';
import { CandidateInput } from 'src/candidate/args/candidate.input';
import { Candidate } from 'src/candidate/candidate.entity';
import { SubUser } from 'src/sub-user/sub-user.entity';
import { MyContext } from 'src/types';
import { AuthService } from './auth.service';
import { AuthorizedCandidate } from './responses/authorizedCandidate';
import { AuthorizedSubUser } from './responses/authorizedSubUser';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthorizedCandidate)
  async candidateLogin(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() ctx: MyContext,
  ): Promise<AuthorizedCandidate> {
    return this.authService.candidateLogin(email, password, ctx);
  }

  @Mutation(() => AuthorizedCandidate)
  async registerCandidate(
    @Args('candidateInput') candidateInput: CandidateInput,
    @Args('address') address: AddressInput,
    @Args('province') province: ProvinceInput,
  ): Promise<AuthorizedCandidate> {
    return await this.authService.registerCandidate(
      candidateInput,
      address,
      province,
    );
  }

  @Query(() => Candidate)
  async verifyCandidate(
    @Args('token') token: string,
  ): Promise<Candidate | null> {
    return await this.authService.verifyCandidate(token);
  }

  @Mutation(() => Candidate)
  async createCandidatePassword(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<Candidate> {
    return await this.authService.createCandidatePassword(email, password);
  }

  @Mutation(() => AuthorizedSubUser)
  async subUserLogin(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() ctx: MyContext,
  ): Promise<AuthorizedSubUser> {
    return await this.authService.subUserLogin(email, password, ctx);
  }

  @Query(() => SubUser)
  async verifySubUser(@Args('token') token: string): Promise<SubUser> {
    return await this.authService.verifySubUser(token);
  }

  @Mutation(() => SubUser)
  async createSubUserPassword(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<SubUser> {
    return await this.authService.createSubUserPassword(email, password);
  }

  @Query(() => Boolean)
  async logout(@Context() ctx: MyContext): Promise<boolean> {
    return await this.authService.logout(ctx);
  }
}
