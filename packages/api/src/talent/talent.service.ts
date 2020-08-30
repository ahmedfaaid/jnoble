import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { Talent, TalentInput } from './talent.entity';

@Injectable()
export class TalentService {
  constructor(
    @InjectRepository(Talent)
    private readonly talentRepository: Repository<Talent>,
  ) {}

  async findAll(): Promise<Talent[]> {
    return await this.talentRepository.find();
  }

  async create(input: TalentInput): Promise<Talent> {
    const hashedPassword = await argon2.hash(input.password);
    const talent = await this.talentRepository.create(input);
    talent.password = hashedPassword;
    return await this.talentRepository.save(talent);
  }
}
