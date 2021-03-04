import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployerGuard } from 'src/auth/guards/gql-auth.guard';
import { SubUserInput, SubUserUpdateInput } from './args/sub-user.input';
import { SubUser } from './sub-user.entity';
import { SubUserService } from './sub-user.service';

@Resolver()
export class SubUserResolver {
  constructor(private readonly subUserService: SubUserService) {}

  @Query(() => [SubUser], { nullable: true })
  async allSubUsers(): Promise<SubUser[]> {
    return await this.subUserService.findAll();
  }

  @Query(() => [SubUser], { nullable: true })
  async subUserByName(@Args('input') input: string): Promise<SubUser[]> {
    return await this.subUserService.findByName(input);
  }

  @Query(() => [SubUser], { nullable: true })
  async subUserByEmail(@Args('input') input: string): Promise<SubUser> {
    return await this.subUserService.findByEmail(input);
  }

  @Query(() => [SubUser], { nullable: true })
  async subUserById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<SubUser> {
    return await this.subUserService.findById(id);
  }

  @Mutation(() => SubUser)
  @UseGuards(EmployerGuard)
  async addSubuser(@Args('subUser') subUser: SubUserInput): Promise<SubUser> {
    return await this.subUserService.addSubUser(subUser);
  }

  @Mutation(() => SubUser)
  @UseGuards(EmployerGuard)
  async updateSubUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: SubUserUpdateInput,
  ): Promise<SubUser> {
    return await this.subUserService.updateSubUser(id, input);
  }
}
