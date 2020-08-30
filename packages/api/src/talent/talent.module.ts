import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TalentResolver } from './talent.resolver';
import { TalentService } from './talent.service';
import { Talent } from './talent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Talent])],
  providers: [TalentResolver, TalentService],
})
export class TalentModule {}
