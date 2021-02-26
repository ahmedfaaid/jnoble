import { Injectable, NotFoundException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Candidate } from 'src/candidate/candidate.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validateCandidate(email: string, password: string): Promise<Candidate> {
    const candidate = await this.authService.validateCandidate(email, password);

    if (!candidate) {
      throw new NotFoundException();
    }

    return candidate;
  }
}
