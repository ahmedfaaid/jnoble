import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { JobService } from './job.service';
import { Job, JobInput } from './job.entity';
import { MyContext } from 'src/types';
import { UseGuards } from '@nestjs/common';
import { EmployerGuard } from 'src/employer/employer.guard';

@Resolver()
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => [Job])
  async jobs(): Promise<Job[]> {
    return await this.jobService.findAll();
  }

  @Query(() => Job)
  async job(@Args('id') id: number): Promise<Job> {
    return await this.jobService.findOne(id);
  }

  @Mutation(() => Job)
  @UseGuards(EmployerGuard)
  async createJob(
    @Args('input') input: JobInput,
    @Context() ctx: MyContext,
  ): Promise<Job> {
    return await this.jobService.create(input, ctx);
  }
}
