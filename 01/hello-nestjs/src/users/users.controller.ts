import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  listOfUsers() {
    return this.usersService.list();
  }

  @Post()
  createUser(@Body() user: User) {
    return this.usersService.create(user);
  }
}
