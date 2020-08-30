import { Module } from '@nestjs/common';
import { TalentResolver } from './talent.resolver';
import { TalentService } from './talent.service';

@Module({
  providers: [TalentResolver, TalentService]
})
export class TalentModule {}
