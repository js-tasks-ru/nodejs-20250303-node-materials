import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectDataSource() private dataSource: DataSource,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find({ relations: ['tasks'] });
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  async createUserAndTask() {
    // this.usersRepository.save(...);
    // this.taskService.updateTask(...);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction('SERIALIZABLE');

    try {
      const user = queryRunner.manager.create(User, { name: 'John' });
      await queryRunner.manager.save(user);

      // await queryRunner.query(`INSERT ...`);
      // await queryRunner.query(`INSERT ...`);
      // await queryRunner.query(`INSERT ...`);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
