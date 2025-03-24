import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, tap, throwError, timeout } from 'rxjs';

@Injectable()
export class MyinterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('MyinterceptorInterceptor start');

    const now = Date.now();
    return next.handle().pipe(
      timeout(500),
      catchError((err) => {
        console.log(`MyinterceptorInterceptor stop: ${Date.now() - now}ms`);
        return throwError(() => new BadRequestException('too long'));
      }),
    );
  }
}
