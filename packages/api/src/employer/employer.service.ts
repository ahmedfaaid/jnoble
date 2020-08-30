import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { Employer, EmployerInput } from './employer.entity';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private readonly employerRepository: Repository<Employer>,
  ) {}

  async findAll(): Promise<Employer[]> {
    return await this.employerRepository.find();
  }

  async findOne(id): Promise<Employer> {
    return await this.employerRepository.findOne(id);
  }

  async create(input: EmployerInput): Promise<Employer> {
    const hashedPassword = await argon2.hash(input.password);
    const employer = this.employerRepository.create(input);
    employer.password = hashedPassword;
    return await this.employerRepository.save(employer);
  }
}
