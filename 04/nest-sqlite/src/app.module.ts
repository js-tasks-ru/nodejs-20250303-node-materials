import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import database from '../config/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [database],
    }),
    TypeOrmModule.forRootAsync(database.asProvider()),
    TasksModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
