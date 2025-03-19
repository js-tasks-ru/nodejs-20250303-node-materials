import { Inject, Injectable, Scope } from '@nestjs/common';
import { User } from './user.model';
import { MyClass } from '../shared/MyClass';

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  @Inject(MyClass)
  private myClass: MyClass;

  private users: User[] = [];

  list() {
    console.log(this.myClass.sayHi());
    return this.users;
  }

  create(user: User) {
    this.users.push({ id: this.users.length + 1, ...user });
    return this.users.at(-1);
  }
}
