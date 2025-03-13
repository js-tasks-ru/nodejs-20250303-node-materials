import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  list() {
    return this.users;
  }

  create(user: User) {
    this.users.push({ id: this.users.length + 1, ...user });
    return this.users.at(-1);
  }
}
