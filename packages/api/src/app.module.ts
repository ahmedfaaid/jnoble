import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TalentModule } from './talent/talent.module';
import { EmployerModule } from './employer/employer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      uploads: true,
    }),
    TalentModule,
    EmployerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
