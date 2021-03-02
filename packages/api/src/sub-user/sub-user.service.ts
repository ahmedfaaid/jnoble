import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubUserInput, SubUserUpdateInput } from './args/sub-user.input';
import { SubUser } from './sub-user.entity';

@Injectable()
export class SubUserService {
  constructor(
    @InjectRepository(SubUser)
    private readonly subUserRepository: Repository<SubUser>,
  ) {}

  async findAll(): Promise<SubUser[]> {
    return await this.subUserRepository.find({
      relations: ['employer', 'employer.address', 'employer.address.province'],
    });
  }

  async findByName(input: string): Promise<SubUser[]> {
    return await this.subUserRepository.find({
      where: { name: input },
      relations: ['employer', 'employer.address', 'employer.address.province'],
    });
  }

  async findByEmail(input: string): Promise<SubUser> {
    return await this.subUserRepository.findOne({
      where: { email: input },
      relations: ['employer', 'employer.address', 'employer.address.province'],
    });
  }

  async findById(id: number): Promise<SubUser> {
    return await this.subUserRepository.findOne(id, {
      relations: ['employer', 'employer.address', 'employer.address.province'],
    });
  }

  async addSubUser(subUser: SubUserInput): Promise<SubUser> {
    return await this.subUserRepository.save(subUser);
  }

  async updateSubUser(id: number, input: SubUserUpdateInput): Promise<SubUser> {
    const subUser = await this.subUserRepository.findOne(id, {
      relations: ['employer', 'employer.address', 'employer.address.province'],
    });

    await this.subUserRepository.update(subUser.id, {
      ...subUser,
      ...input,
    });

    return await this.subUserRepository.findOne(id, {
      relations: ['employer', 'employer.address', 'employer.address.province'],
    });
  }
}
