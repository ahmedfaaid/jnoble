import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { AddressInput } from 'src/address/address.entity';
import { ProvinceInput } from 'src/address/province.entity';
import { SubUserInput } from 'src/sub-user/args/sub-user.input';
import { EmployerInput, EmployerUpdateInput } from './args/employer.input';
import { Employer } from './employer.entity';
import { EmployerService } from './employer.service';

@Resolver()
export class EmployerResolver {
  constructor(private readonly employerService: EmployerService) {}

  @Query(() => [Employer], { nullable: true })
  async allEmployers(): Promise<Employer[]> {
    return await this.employerService.findAll();
  }

  @Query(() => [Employer], { nullable: true })
  async employerByName(@Args('input') input: string): Promise<Employer[]> {
    return await this.employerService.findByName(input);
  }

  @Query(() => [Employer], { nullable: true })
  async employerByEmail(@Args('input') input: string): Promise<Employer> {
    return await this.employerService.findByEmail(input);
  }

  @Query(() => [Employer], { nullable: true })
  async employerById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Employer> {
    return await this.employerService.findById(id);
  }

  @Mutation(() => Employer)
  async addEmployer(
    @Args('sub') sub: SubUserInput,
    @Args('employer')
    employer: EmployerInput,
    @Args('address') address: AddressInput,
    @Args('province') province: ProvinceInput,
  ): Promise<Employer> {
    return await this.employerService.addEmployer(
      sub,
      employer,
      address,
      province,
    );
  }

  @Mutation(() => Employer)
  async updateEmployer(
    @Args('id', { type: () => Int }) id: number,
    @Args('input')
    input: EmployerUpdateInput,
    @Args('province', { nullable: true }) province: ProvinceInput,
  ): Promise<Employer> {
    return await this.employerService.updateEmployer(id, input, province);
  }
}
