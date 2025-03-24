import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MyguardGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    console.log('MyguardGuard');

    const ctx = context.switchToHttp();
    const req = ctx.getRequest();

    // req.user.role === 'admin'?

    return req.headers['x-role'] === 'admin';
  }
}
