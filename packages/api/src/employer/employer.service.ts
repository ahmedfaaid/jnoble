import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employer } from './employer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private readonly employerService: Repository<Employer>,
  ) {}

  async findAll(): Promise<Employer[]> {
    return await this.employerService.find();
  }
}
