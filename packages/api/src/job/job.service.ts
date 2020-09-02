import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Job, JobInput } from './job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MyContext } from 'src/types';
import { EmployerService } from 'src/employer/employer.service';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
    private readonly employerService: EmployerService,
  ) {}

  async findAll(): Promise<Job[]> {
    return await this.jobRepository.find();
  }

  async findOne(id: number): Promise<Job> {
    return await this.jobRepository.findOne(id);
  }

  async create(input: JobInput, ctx: MyContext): Promise<Job> {
    const employer = await this.employerService.findOne(ctx.req.session.userId);

    const job = this.jobRepository.create(input);

    job.employer = employer;

    return await this.jobRepository.save(job);
  }
}
