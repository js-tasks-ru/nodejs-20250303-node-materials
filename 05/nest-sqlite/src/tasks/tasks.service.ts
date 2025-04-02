import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { UsersService } from '../users/users.service';
import * as assert from 'node:assert';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
    private usersService: UsersService,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    // const user = await this.usersService.findOne(createTaskDto.assignee);
    // if (!user)
    //   throw new BadRequestException(
    //     `assignee with id ${createTaskDto.assignee} not found`,
    //   );
    //
    // const task = new Task();
    // task.title = createTaskDto.title;
    // task.description = createTaskDto.description;
    // task.assignees = [user];
    //
    // await this.taskRepository.save(task);
    //
    // return task;
  }

  findAll() {
    return this.taskRepository.find({ relations: ['assignees'] });
  }

  findOne(id: number) {
    return this.taskRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    let user;
    if (updateTaskDto.assignee) {
      user = await this.usersService.findOne(updateTaskDto.assignee);
      if (!user)
        throw new BadRequestException(
          `assignee with id ${updateTaskDto.assignee} not found`,
        );
    }

    const task = await this.findOne(id);
    if (!task) throw new NotFoundException(`task with id: ${id} not found`);

    Object.assign(task, {
      ...updateTaskDto,
      assignees: user ? [user] : task.assignees,
    });

    await this.taskRepository.save(task);

    return task;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
