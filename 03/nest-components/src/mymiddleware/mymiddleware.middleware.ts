import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MymiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      'MymiddlewareMiddleware',
      new Date(),
      req.url,
      req.headers['user-agent'],
    );
    next();
  }
}
