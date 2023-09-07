import { Body, Controller, Get, Post } from '@nestjs/common';
import { KanbanService } from './kanban.service';

@Controller('kanban')
export class KanbanController {
  constructor(private kanbanService: KanbanService) {}
  @Post('create')
  async createTask(@Body() { task }) {
    // Let say we check user input to prenvent injection
    return this.kanbanService.addTask(task);
  }

  @Get()
  async getTasks() {
    return await this.kanbanService.listTasks();
  }

  @Post('delete')
  async deleteTask(@Body() { taskId }) {
    return this.kanbanService.deleteTask(taskId);
  }
}
