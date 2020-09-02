import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { EmployerService } from './employer.service';
import { Employer, EmployerInput } from './employer.entity';
import { MyContext } from 'src/types';

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

  @Query(() => Employer)
  async employerLogin(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() ctx: MyContext,
  ): Promise<Employer> {
    return await this.employerService.login(email, password, ctx);
  }

  @Mutation(() => Employer)
  async createEmployer(
    @Args('input') input: EmployerInput,
    @Context() ctx: MyContext,
  ): Promise<Employer> {
    return await this.employerService.create(input, ctx);
  }
}
