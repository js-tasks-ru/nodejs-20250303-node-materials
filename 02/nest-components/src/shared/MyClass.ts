import { Inject, Injectable, Scope } from '@nestjs/common';
import { sum } from '../libs/sum';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MyClass {
  @Inject(ConfigService)
  private readonly configService: ConfigService;

  constructor() {
    console.log('MyClass instantiated');
  }

  sayHi() {
    console.log(this.configService.get('db.user'));
    console.log(this.configService.get('db.password'));
    console.log(this.configService.get('db.type'));
    return 'hi!';
  }

  calculate(n: number) {
    return sum(n, 10);
  }
}
