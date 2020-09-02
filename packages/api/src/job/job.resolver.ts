import { Resolver, Query } from '@nestjs/graphql';
import { JobService } from './job.service';
import { Job } from './job.entity';

@Resolver()
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => [Job])
  async jobs(): Promise<Job[]> {
    return await this.jobService.findAll();
  }
}
