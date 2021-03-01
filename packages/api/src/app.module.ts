import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CandidateModule } from './candidate/candidate.module';
import { AuthModule } from './auth/auth.module';
import { EmployerModule } from './employer/employer.module';
import { SubUserModule } from './sub-user/sub-user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      uploads: true,
    }),
    CandidateModule,
    AuthModule,
    EmployerModule,
    SubUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
