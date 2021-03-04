import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { AddressInput } from 'src/address/address.entity';
import { ProvinceInput } from 'src/address/province.entity';
import { CandidateInput } from 'src/candidate/args/candidate.input';
import { Candidate } from 'src/candidate/candidate.entity';
import { CandidateService } from 'src/candidate/candidate.service';
import { SubUser } from 'src/sub-user/sub-user.entity';
import { SubUserService } from 'src/sub-user/sub-user.service';
import { MyContext } from 'src/types';
import { AuthorizedCandidate } from './responses/authorizedCandidate';
import { AuthorizedSubUser } from './responses/authorizedSubUser';

@Injectable()
export class AuthService {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly jwtService: JwtService,
    private readonly subUserService: SubUserService,
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

  async candidateLogin(
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
        role: validCandidate.role,
      },
      {
        secret: process.env.AUTH_SECRET,
        expiresIn: '3600s',
      },
    );

    ctx.req.session.user = {
      email: validCandidate.email,
      role: validCandidate.role,
      token,
    };

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
      decoded.candidate,
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

  async validateSubUser(email: string, password: string): Promise<SubUser> {
    const subUser = await this.subUserService.findByEmail(email);

    if (!subUser) {
      return null;
    }

    if (!subUser.password) {
      return null;
    }

    const validPassword = argon.verify(subUser.password, password);
    return validPassword ? subUser : null;
  }

  async subUserLogin(
    email: string,
    password: string,
    ctx: MyContext,
  ): Promise<AuthorizedSubUser> {
    const validSubUser = await this.validateSubUser(email, password);

    if (!validSubUser) {
      throw new NotFoundException();
    }

    const token = await this.jwtService.sign(
      {
        user: validSubUser.email,
        id: validSubUser.id,
        role: validSubUser.role,
      },
      {
        secret: process.env.AUTH_SECRET,
        expiresIn: '3600s',
      },
    );

    ctx.req.session.user = {
      email: validSubUser.email,
      role: validSubUser.role,
      token,
    };

    return {
      subUser: validSubUser,
      token,
    };
  }

  async verifySubUser(token: string): Promise<SubUser> {
    const decoded = await this.jwtService.verify(token, {
      secret: process.env.AUTH_SECRET,
    });

    const subUser = await this.subUserService.findByEmail(decoded.user);

    if (!subUser) {
      throw new NotFoundException();
    }

    return subUser;
  }

  async createSubUserPassword(
    email: string,
    password: string,
  ): Promise<SubUser> {
    const existingSubUser = await this.subUserService.findByEmail(email);

    if (!existingSubUser) {
      throw new NotFoundException();
    }

    if (existingSubUser.password) {
      throw new ForbiddenException();
    }

    const hash = await argon.hash(password);

    return await this.subUserService.updateSubUser(existingSubUser.id, {
      password: hash,
    });
  }
}
