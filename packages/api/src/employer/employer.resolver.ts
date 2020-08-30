import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployerService } from './employer.service';
import { Employer, EmployerInput } from './employer.entity';

@Resolver()
export class EmployerResolver {
  constructor(private readonly employerService: EmployerService) {}

  @Query(() => [Employer])
  async employers(): Promise<Employer[]> {
    return await this.employerService.findAll();
  }

  @Query(() => Employer)
  async employer(@Args('id') id: number): Promise<Employer> {
    return await this.employerService.findOne(id);
  }

  @Mutation(() => Employer)
  async createEmployer(@Args('input') input: EmployerInput): Promise<Employer> {
    return await this.employerService.create(input);
  }
}
