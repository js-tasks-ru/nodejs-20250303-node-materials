import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db';

@Module({
  imports: [
    SharedModule,
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      load: [dbConfig],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
