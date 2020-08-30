import { Resolver, Query } from '@nestjs/graphql';
import { EmployerService } from './employer.service';
import { Employer } from './employer.entity';

@Resolver()
export class EmployerResolver {
  constructor(private readonly employerService: EmployerService) {}

  @Query(() => [Employer])
  async employers(): Promise<Employer[]> {
    return await this.employerService.findAll();
  }
}
