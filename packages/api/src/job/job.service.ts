import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async findAll(): Promise<Job[]> {
    return await this.jobRepository.find();
  }

  async findOne(id: number): Promise<Job> {
    return await this.jobRepository.findOne(id);
  }
}
