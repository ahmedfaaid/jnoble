import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Candidate } from 'src/candidate/candidate.entity';
import { CandidateService } from 'src/candidate/candidate.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly candidateService: CandidateService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.AUTH_SECRET,
    });
  }

  async validateCandidate(validationPayload: {
    email: string;
    sub: number;
  }): Promise<Candidate | null> {
    return await this.candidateService.findById(validationPayload.sub);
  }
}
