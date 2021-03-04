import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Candidate } from 'src/candidate/candidate.entity';
import { CandidateService } from 'src/candidate/candidate.service';
import { Role } from 'src/lib/roles';
import { SubUser } from 'src/sub-user/sub-user.entity';
import { SubUserService } from 'src/sub-user/sub-user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly subUserService: SubUserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.AUTH_SECRET,
    });
  }

  async validate(validationPayload: {
    email: string;
    id: number;
    role: Role;
  }): Promise<SubUser | Candidate | null> {
    if (validationPayload.role === 'Admin' || 'Man') {
      return await this.subUserService.findById(validationPayload.id);
    }

    return await this.candidateService.findById(validationPayload.id);
  }
}
