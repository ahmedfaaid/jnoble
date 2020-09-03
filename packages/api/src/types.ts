import { Request, Response } from 'express';

export type MyContext = {
  req: Request & { session: Express.Session };
  res: Response;
};

export type MyUser = {
  id: number;
  role: string;
};
