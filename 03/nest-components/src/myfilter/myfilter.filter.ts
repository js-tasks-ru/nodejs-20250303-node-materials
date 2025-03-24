import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import MyError from '../MyError';
import { Response } from 'express';

@Catch(MyError)
export class MyfilterFilter implements ExceptionFilter {
  catch(exception: MyError, host: ArgumentsHost) {
    console.log('MyfilterFilter', exception.message);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(400).json({
      message: 'MyError',
      status: 400,
      now: exception.now,
    });
  }
}
