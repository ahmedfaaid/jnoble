import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TalentModule } from './talent/talent.module';
import { EmployerModule } from './employer/employer.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      uploads: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    TalentModule,
    EmployerModule,
    JobModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
