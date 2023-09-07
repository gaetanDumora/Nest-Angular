import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { DatabaseModule } from './database/database.module';
import { ModelsModule } from './models/models.module';
import { KanbanModule } from './kanban/kanban.module';

@Module({
  imports: [DashboardModule, DatabaseModule, ModelsModule, KanbanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
