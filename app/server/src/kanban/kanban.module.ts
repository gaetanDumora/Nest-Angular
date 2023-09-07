import { Module } from '@nestjs/common';
import { KanbanController } from './kanban.controller';
import { KanbanService } from './kanban.service';
import { DatabaseModule } from 'src/database/database.module';
import { TaskService } from 'src/models/task/task.service';
import { taskProviders } from 'src/models/task/task.provider';
import { UserService } from 'src/models/user/user.service';
import { userProviders } from 'src/models/user/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [KanbanController],
  providers: [
    KanbanService,
    TaskService,
    ...taskProviders,
    UserService,
    ...userProviders,
  ],
})
export class KanbanModule {}
