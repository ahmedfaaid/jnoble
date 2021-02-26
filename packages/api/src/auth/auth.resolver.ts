import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { AddressInput } from 'src/address/address.entity';
import { ProvinceInput } from 'src/address/province.entity';
import { CandidateInput } from 'src/candidate/args/candidate.input';
import { Candidate } from 'src/candidate/candidate.entity';
import { MyContext } from 'src/types';
import { AuthService } from './auth.service';
import { AuthorizedCandidate } from './responses/authorizedCandidate';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => AuthorizedCandidate)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() ctx: MyContext,
  ): Promise<AuthorizedCandidate> {
    return this.authService.login(email, password, ctx);
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

  @Mutation(() => Candidate)
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
}
