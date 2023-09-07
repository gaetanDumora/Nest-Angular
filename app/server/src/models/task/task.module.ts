import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { taskProviders } from './task.provider';
import { TaskService } from './task.service';

@Module({
  imports: [DatabaseModule],
  providers: [...taskProviders, TaskService],
})
export class TaskModule {}
