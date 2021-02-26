import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/address/address.entity';
import { Province } from 'src/address/province.entity';
import { Candidate } from './candidate.entity';
import { CandidateResolver } from './candidate.resolver';
import { CandidateService } from './candidate.service';

@Module({
  imports: [TypeOrmModule.forFeature([Candidate, Address, Province])],
  providers: [CandidateResolver, CandidateService],
  exports: [CandidateService, TypeOrmModule],
})
export class CandidateModule {}
