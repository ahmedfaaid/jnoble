import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Job, JobInput } from './job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MyContext, MyUser } from 'src/types';
import { EmployerService } from 'src/employer/employer.service';
import { TalentService } from 'src/talent/talent.service';
import { JobApplication } from './jobApplication.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
    @InjectRepository(JobApplication)
    private readonly applicationRepository: Repository<JobApplication>,
    private readonly employerService: EmployerService,
    private readonly talentService: TalentService,
  ) {}

  async findAll(): Promise<Job[]> {
    return await this.jobRepository.find({
      relations: ['employer', 'jobApplications', 'jobApplications.applicant'],
    });
  }

  async findOne(id: number): Promise<Job> {
    return await this.jobRepository.findOne(id, {
      relations: ['employer', 'jobApplications', 'jobApplications.applicant'],
    });
  }

  async create(input: JobInput, ctx: MyContext): Promise<Job> {
    const employer = await this.employerService.findOne(ctx.req.session.userId);

    const job = this.jobRepository.create(input);

    job.employer = employer;

    return await this.jobRepository.save(job);
  }

  async apply(jobId: number, user: MyUser): Promise<Job> {
    const job = await this.jobRepository.findOne(jobId);

    const applicant = await this.talentService.findOne(user.id);

    await this.applicationRepository.save({ job, applicant });

    return await this.jobRepository.findOne(jobId, {
      relations: ['employer', 'jobApplications', 'jobApplications.applicant'],
    });
  }
}
