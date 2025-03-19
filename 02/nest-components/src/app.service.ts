import { Inject, Injectable, Scope } from '@nestjs/common';
import { MyClass } from './shared/MyClass';

@Injectable()
export class AppService {
  @Inject(MyClass)
  private myClass: MyClass;

  // constructor(private readonly myClass: MyClass) {}
  constructor() {
    console.log('AppService instantiated');
  }

  getHello(): string {
    return this.myClass.sayHi();
  }
}
