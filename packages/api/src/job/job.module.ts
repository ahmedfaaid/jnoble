import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobResolver } from './job.resolver';
import { JobService } from './job.service';
import { Job } from './job.entity';
import { EmployerModule } from 'src/employer/employer.module';
import { Employer } from 'src/employer/employer.entity';
import { EmployerService } from 'src/employer/employer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Job, Employer]), EmployerModule],
  providers: [JobResolver, JobService, EmployerService],
})
export class JobModule {}
