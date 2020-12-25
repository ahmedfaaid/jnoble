import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AddressInput } from 'src/address/address.entity';
import { ProvinceInput } from 'src/address/province.entity';
import { Candidate, CandidateInput } from './candidate.entity';
import { CandidateService } from './candidate.service';

@Resolver()
export class CandidateResolver {
  constructor(private readonly candidateService: CandidateService) {}

  @Query(() => [Candidate])
  async allCandidates(): Promise<Candidate[]> {
    return await this.candidateService.findAll();
  }

  @Query(() => [Candidate])
  async candidatesByName(@Args('input') input: string): Promise<Candidate[]> {
    return await this.candidateService.findByName(input);
  }

  // TODO: add candidateById query
  // TODO: add update candidate mutation
  // TODO: add remove candidate mutation
  // TODO: add mass addition of candidates
  // TODO: add filter candidate by parameter

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
}
