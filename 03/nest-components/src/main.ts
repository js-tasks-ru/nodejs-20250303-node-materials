import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './logger/middleware';
import { MyguardGuard } from './myguard/myguard.guard';
import { MyfilterFilter } from './myfilter/myfilter.filter';
import { MyinterceptorInterceptor } from './myinterceptor/myinterceptor.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.use(logger(1), logger(2), logger(3));
  app.use(logger(4));
  app.use(logger(5));
  app.use(logger(6));
  app.useGlobalGuards(new MyguardGuard());
  // app.useGlobalFilters(new MyfilterFilter());
  app.useGlobalInterceptors(new MyinterceptorInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
