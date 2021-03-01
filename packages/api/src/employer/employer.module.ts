import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/address/address.entity';
import { Province } from 'src/address/province.entity';
import { SubUser } from 'src/sub-user/sub-user.entity';
import { Employer } from './employer.entity';
import { EmployerResolver } from './employer.resolver';
import { EmployerService } from './employer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employer, Address, Province, SubUser])],
  providers: [EmployerResolver, EmployerService],
  exports: [EmployerService, TypeOrmModule],
})
export class EmployerModule {}
