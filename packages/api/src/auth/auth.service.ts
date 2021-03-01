import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { AddressInput } from 'src/address/address.entity';
import { ProvinceInput } from 'src/address/province.entity';
import { CandidateInput } from 'src/candidate/args/candidate.input';
import { Candidate } from 'src/candidate/candidate.entity';
import { CandidateService } from 'src/candidate/candidate.service';
import { MyContext } from 'src/types';
import { AuthorizedCandidate } from './responses/authorizedCandidate';

@Injectable()
export class AuthService {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly jwtService: JwtService,
  ) {}

  async validateCandidate(
    email: string,
    password?: string,
  ): Promise<Candidate | null> {
    const candidate = await this.candidateService.findByEmail(email);

    if (!candidate) {
      return null;
    }

    if (!candidate.password) {
      return null;
    }

    const validPassword = argon.verify(candidate.password, password);
    return validPassword ? candidate : null;
  }

  async login(
    email: string,
    password: string,
    ctx: MyContext,
  ): Promise<AuthorizedCandidate> {
    const validCandidate = await this.validateCandidate(email, password);

    if (!validCandidate) {
      throw new NotFoundException();
    }

    const token = await this.jwtService.sign(
      {
        candidate: validCandidate.email,
        id: validCandidate.id,
      },
      {
        secret: process.env.AUTH_SECRET,
      },
    );

    ctx.req.session.token = token;

    return {
      candidate: validCandidate,
      token,
    };
  }

  async registerCandidate(
    candidateInput: CandidateInput,
    address: AddressInput,
    province: ProvinceInput,
  ): Promise<AuthorizedCandidate> {
    const validCandidate = await this.candidateService.findByEmail(
      candidateInput.email,
    );

    if (validCandidate) {
      throw new Error('Candidate already exists');
    }

    const hash = await argon.hash(candidateInput.password);

    const registeredCandidate = await this.candidateService.addCandidate(
      { ...candidateInput, password: hash },
      address,
      province,
    );

    const token = await this.jwtService.sign({
      candidate: registeredCandidate.email,
      id: registeredCandidate.id,
    });

    return { candidate: registeredCandidate, token };
  }

  async verifyCandidate(token: string): Promise<Candidate> {
    const decoded = await this.jwtService.verify(token, {
      secret: process.env.AUTH_SECRET,
    });

    const candidate = await this.candidateService.findByEmail(
      decoded.candidate.email,
    );

    if (!candidate) {
      throw new NotFoundException();
    }

    return candidate;
  }

  async createCandidatePassword(
    email: string,
    password: string,
  ): Promise<Candidate> {
    const existingCandidate = await this.candidateService.findByEmail(email);

    if (!existingCandidate) {
      throw new NotFoundException();
    }

    const hash = await argon.hash(password);

    return await this.candidateService.updateCandidate(existingCandidate.id, {
      password: hash,
    });
  }
}
