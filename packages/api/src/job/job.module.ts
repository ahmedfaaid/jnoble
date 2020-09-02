import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobResolver } from './job.resolver';
import { JobService } from './job.service';
import { Job } from './job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  providers: [JobResolver, JobService],
})
export class JobModule {}
