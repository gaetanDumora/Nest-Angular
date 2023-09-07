import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { PROVIDERS } from 'src/common/constants';

@Injectable()
export class TaskService {
  constructor(
    @Inject(PROVIDERS.taskRepo)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(task: string) {
    return this.taskRepository.save({ name: task });
  }

  async getTasks() {
    return this.taskRepository.find();
  }

  async deleteTask(id: number) {
    return this.taskRepository.delete({ id });
  }
}
