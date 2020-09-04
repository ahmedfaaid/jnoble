import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobResolver } from './job.resolver';
import { JobService } from './job.service';
import { Job } from './job.entity';
import { EmployerModule } from 'src/employer/employer.module';
import { Employer } from 'src/employer/employer.entity';
import { EmployerService } from 'src/employer/employer.service';
import { TalentService } from 'src/talent/talent.service';
import { TalentModule } from 'src/talent/talent.module';
import { Talent } from 'src/talent/talent.entity';
import { JobApplication } from './jobApplication.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Job, JobApplication, Employer, Talent]),
    EmployerModule,
    TalentModule,
  ],
  providers: [JobResolver, JobService, EmployerService, TalentService],
})
export class JobModule {}
