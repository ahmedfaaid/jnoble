import { Request, Response } from 'express';
import { Session, SessionData } from 'express-session';

export type MyContext = {
  req: Request & {
    session: Session &
      Partial<SessionData> & {
        user: {
          email: string;
          role: string;
          token: string;
        };
      };
  };
  res: Response;
};
