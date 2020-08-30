import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TalentModule } from './talent/talent.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      uploads: true,
    }),
    TalentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
