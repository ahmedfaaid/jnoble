import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GeneralGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const { user, cookie } = ctx.getContext().req.session;

    console.log({ user });
    console.log({ cookie });

    if (user && user.id && cookie._expires > new Date()) {
      return true;
    }

    return false;
  }
}

@Injectable()
export class EmployerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const { user, cookie } = ctx.getContext().req.session;

    console.log({ user });
    console.log({ cookie });

    if (
      user &&
      user.id &&
      (user.role === 'Admin' || 'Man') &&
      cookie._expires > new Date()
    ) {
      return true;
    }

    return false;
  }
}
