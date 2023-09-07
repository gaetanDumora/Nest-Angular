import { Component, EventEmitter, Output } from '@angular/core';
import { ENV } from 'environnement';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css'],
})
export class TaskInputComponent {
  @Output() refreshBoard: EventEmitter<boolean> = new EventEmitter();
  constructor(private httpClient: HttpClient) {}
  addTask(task: string) {
    if (!task) return;
    this.httpClient
      .post(`${ENV.apiUrl}/kanban/create`, { task })
      .subscribe(() => this.refreshBoard.emit(true));
  }
}
