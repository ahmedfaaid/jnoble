import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as Redis from 'ioredis';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
import { config } from 'dotenv';
import { AppModule } from './app.module';
config();

const port = 4040;
const RedisStore = connectRedis(session);
const redisClient = new Redis();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      name: 'noble.qid',
      store: new RedisStore({
        client: redisClient,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
        sameSite: 'lax',
      },
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      resave: true,
    }),
  );
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
