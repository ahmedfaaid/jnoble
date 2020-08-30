import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployerResolver } from './employer.resolver';
import { EmployerService } from './employer.service';
import { Employer } from './employer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employer])],
  providers: [EmployerResolver, EmployerService],
})
export class EmployerModule {}
