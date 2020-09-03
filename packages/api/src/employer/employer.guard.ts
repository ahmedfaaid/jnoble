import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';
import { EmployerService } from './employer.service';

@Injectable()
export class EmployerGuard implements CanActivate {
  constructor(private readonly employerService: EmployerService) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);

    if (ctx.getContext().req.session.user.role !== 'employer') return false;

    return true;
  }
}
