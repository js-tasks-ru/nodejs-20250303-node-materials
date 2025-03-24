import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MymiddlewareMiddleware } from './mymiddleware/mymiddleware.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(MymiddlewareMiddleware).forRoutes('*');
  }
}
