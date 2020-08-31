import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobResolver } from './job.resolver';
import { JobService } from './job.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [JobResolver, JobService],
})
export class JobModule {}
