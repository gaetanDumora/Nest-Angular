import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './page/board/board.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [BoardComponent, TaskInputComponent, TaskCardComponent],
  imports: [CommonModule],
})
export class KanbanModule {}
