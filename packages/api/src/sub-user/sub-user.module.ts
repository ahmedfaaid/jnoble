import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubUser } from './sub-user.entity';
import { SubUserResolver } from './sub-user.resolver';
import { SubUserService } from './sub-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubUser])],
  providers: [SubUserResolver, SubUserService],
  exports: [SubUserService, TypeOrmModule],
})
export class SubUserModule {}
