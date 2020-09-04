import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { Employer, EmployerInput } from './employer.entity';
import { MyContext } from 'src/types';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private readonly employerRepository: Repository<Employer>,
  ) {}

  async findAll(): Promise<Employer[]> {
    return await this.employerRepository.find({
      relations: [
        'jobs',
        'jobs.jobApplications',
        'jobs.jobApplications.applicant',
      ],
    });
  }

  async findOne(id: number): Promise<Employer> {
    return await this.employerRepository.findOne(id, {
      relations: [
        'jobs',
        'jobs.jobApplications',
        'jobs.jobApplications.applicant',
      ],
    });
  }

  async login(
    email: string,
    password: string,
    ctx: MyContext,
  ): Promise<Employer> {
    const user = await this.employerRepository.findOne({
      where: { companyEmail: email },
    });

    if (!user) return null;

    const validPassword = await argon2.verify(user.password, password);

    if (!validPassword) return null;

    ctx.req.session.user = { id: user.id, role: user.role };

    return user;
  }

  async create(input: EmployerInput, ctx: MyContext): Promise<Employer> {
    const hashedPassword = await argon2.hash(input.password);

    const employer = this.employerRepository.create(input);

    employer.password = hashedPassword;

    const savedUser = await this.employerRepository.save(employer);

    ctx.req.session.user = { id: savedUser.id, role: savedUser.role };

    return savedUser;
  }
}
