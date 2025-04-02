import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = await this.taskModel.create(createTaskDto);
    return task;
  }

  async findAll() {
    const tasks = await this.taskModel.find({}).populate('assignee');
    return tasks.map((t) => {
      // t.assignee = t.assignee.name;
      // return t;
      return t;
    });
  }

  findOne(id: string) {
    return this.taskModel.findById(id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {}

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
