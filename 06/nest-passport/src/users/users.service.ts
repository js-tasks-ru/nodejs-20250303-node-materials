import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findOne(username: string) {
    return this.userRepository.findOneBy({ username });
  }

  create(username: string) {
    const user = new User();
    user.username = username;
    return this.userRepository.save(user);
  }

  async saveRefreshToken(id: number, refreshToken: string) {
    await this.userRepository.update(
      { id: id },
      { refreshToken: refreshToken },
    );
  }
}
