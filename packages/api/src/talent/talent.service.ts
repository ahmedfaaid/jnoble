import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Talent } from './talent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TalentService {
  constructor(
    @InjectRepository(Talent)
    private readonly talentRepository: Repository<Talent>,
  ) {}

  async findAll(): Promise<Talent[]> {
    return await this.talentRepository.find();
  }
}
