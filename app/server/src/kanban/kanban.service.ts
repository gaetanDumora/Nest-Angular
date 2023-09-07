import { Injectable } from '@nestjs/common';
import { TaskService } from 'src/models/task/task.service';
import { UserService } from 'src/models/user/user.service';

@Injectable()
export class KanbanService {
  constructor(
    private taskService: TaskService,
    private userService: UserService,
  ) {}
  async addTask(task: string) {
    return await this.taskService.createTask(task);
  }

  async listTasks() {
    return await this.taskService.getTasks();
  }

  async deleteTask(id: number) {
    return await this.taskService.deleteTask(id);
  }
}
