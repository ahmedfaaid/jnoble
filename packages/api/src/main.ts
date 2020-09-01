import dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';

dotenv.config();

const port = 4040;
const RedisStore = connectRedis(session);
const redisClient = new Redis();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      name: 'noble.qid',
      store: RedisStore({
        client: redisClient,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
        sameSite: 'lax',
      },
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
    }),
  );
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
