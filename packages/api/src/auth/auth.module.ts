import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CandidateModule } from 'src/candidate/candidate.module';
import { SubUserModule } from 'src/sub-user/sub-user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    CandidateModule,
    SubUserModule,
    PassportModule.register({ session: true, defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.AUTH_SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
