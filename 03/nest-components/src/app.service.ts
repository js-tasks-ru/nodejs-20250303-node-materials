import { Injectable } from '@nestjs/common';
import MyError from './MyError';

@Injectable()
export class AppService {
  async getHello() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('i am still running!');

    return 'Hello World!';
  }
}
