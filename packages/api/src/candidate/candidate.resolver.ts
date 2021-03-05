import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Int, Context } from '@nestjs/graphql';
import { AddressInput } from 'src/address/address.entity';
import { ProvinceInput } from 'src/address/province.entity';
import { EmployerGuard, GeneralGuard } from 'src/auth/guards/gql-auth.guard';
import { MyContext } from 'src/types';
import { CandidateInput, CandidateUpdateInput } from './args/candidate.input';
import { Candidate, AllCandidatesResponse } from './candidate.entity';
import { CandidateService } from './candidate.service';

@Resolver()
export class CandidateResolver {
  constructor(private readonly candidateService: CandidateService) {}

  @Query(() => AllCandidatesResponse, { nullable: true })
  @UseGuards(EmployerGuard)
  async allCandidates(
    @Args('take', { type: () => Int }) take: number,
    @Context() ctx: MyContext,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
  ): Promise<AllCandidatesResponse> {
    return await this.candidateService.findAll(take, ctx, skip);
  }

  @Query(() => [Candidate], { nullable: true })
  @UseGuards(GeneralGuard)
  async candidatesByName(@Args('input') input: string): Promise<Candidate[]> {
    return await this.candidateService.findByName(input);
  }

  @Query(() => Candidate, { nullable: true })
  @UseGuards(GeneralGuard)
  async candidateByEmail(@Args('input') input: string): Promise<Candidate> {
    return await this.candidateService.findByEmail(input);
  }

  @Query(() => Candidate, { nullable: true })
  @UseGuards(GeneralGuard)
  async candidateById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Candidate> {
    return await this.candidateService.findById(id);
  }

  // TODO: add remove candidate mutation
  // TODO: add mass addition of candidates
  // TODO: add filter candidate by parameter
  // Todo: fix foreign key error when trying to update candidate

  @Mutation(() => Candidate)
  async addCandidate(
    @Args('candidate') candidate: CandidateInput,
    @Args('address') address: AddressInput,
    @Args('province') province: ProvinceInput,
  ): Promise<Candidate> {
    return await this.candidateService.addCandidate(
      candidate,
      address,
      province,
    );
  }

  @Mutation(() => Candidate)
  @UseGuards(GeneralGuard)
  async updateCandidate(
    @Args('id') id: number,
    @Args('input', { nullable: true }) input: CandidateUpdateInput,
    @Args('province', { nullable: true }) province: ProvinceInput,
  ): Promise<Candidate> {
    return await this.candidateService.updateCandidate(id, input, province);
  }

  @Mutation(() => [Candidate])
  @UseGuards(EmployerGuard)
  async bulkAdd(): Promise<Candidate[]> {
    return await this.candidateService.bulkAdd();
  }
}
