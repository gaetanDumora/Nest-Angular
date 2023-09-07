import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { KanbanModule } from './kanban/kanban.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [DashboardModule, KanbanModule],
})
export class FeaturesModule {}
