import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { AddressInput } from 'src/address/address.entity';
import { ProvinceInput } from 'src/address/province.entity';
import { CandidateBulkInput } from './args/bulk.input';
import { CandidateInput } from './args/candidate.input';
import { Candidate, AllCandidatesResponse } from './candidate.entity';
import { CandidateService } from './candidate.service';

@Resolver()
export class CandidateResolver {
  constructor(private readonly candidateService: CandidateService) {}

  @Query(() => AllCandidatesResponse, { nullable: true })
  async allCandidates(
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
  ): Promise<AllCandidatesResponse> {
    return await this.candidateService.findAll(skip);
  }

  @Query(() => [Candidate], { nullable: true })
  async candidatesByName(@Args('input') input: string): Promise<Candidate[]> {
    return await this.candidateService.findByName(input);
  }

  @Query(() => Candidate, { nullable: true })
  async candidateByEmail(@Args('input') input: string): Promise<Candidate> {
    return await this.candidateService.findByEmail(input);
  }

  // TODO: add candidateById query
  // TODO: add update candidate mutation
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
  async updateCandidate(
    candidate: CandidateInput,
    address: AddressInput,
    province: ProvinceInput,
  ): Promise<Candidate> {
    return await this.candidateService.updateCandidate(
      candidate,
      address,
      province,
    );
  }

  @Mutation(() => [Candidate])
  async bulkAdd(
    @Args('bulkInput', { type: () => [CandidateBulkInput] })
    bulkInput: CandidateBulkInput[],
  ): Promise<Candidate[]> {
    return await this.candidateService.bulkAdd(bulkInput);
  }
}
