import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { Talent, TalentInput } from './talent.entity';
import { MyContext } from 'src/types';

@Injectable()
export class TalentService {
  constructor(
    @InjectRepository(Talent)
    private readonly talentRepository: Repository<Talent>,
  ) {}

  async findAll(): Promise<Talent[]> {
    return await this.talentRepository.find({ relations: ['myJobs'] });
  }

  async findOne(id: number): Promise<Talent> {
    return await this.talentRepository.findOne(id, { relations: ['myJobs'] });
  }

  async login(
    email: string,
    password: string,
    ctx: MyContext,
  ): Promise<Talent> {
    const user = await this.talentRepository.findOne({ where: { email } });

    if (!user) return null;

    const validPassword = await argon2.verify(user.password, password);

    if (!validPassword) return null;

    ctx.req.session.user = { id: user.id, role: user.role };

    return user;
  }

  async create(input: TalentInput, ctx: MyContext): Promise<Talent> {
    const hashedPassword = await argon2.hash(input.password);

    const user = await this.talentRepository.create(input);

    user.password = hashedPassword;

    const savedUser = await this.talentRepository.save(user);

    ctx.req.session.user = { id: savedUser.id, role: savedUser.role };

    return savedUser;
  }
}
