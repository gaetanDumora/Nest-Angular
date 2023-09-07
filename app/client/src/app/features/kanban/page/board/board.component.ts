import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { HttpClient } from '@angular/common/http';
import { ENV } from 'environnement';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  tasks: Task[] | undefined;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    return this.getAllTasks();
  }

  onRefreshBoard() {
    return this.getAllTasks();
  }

  getAllTasks() {
    return this.httpClient
      .get<Task[]>(`${ENV.apiUrl}/kanban`)
      .subscribe((data) => (this.tasks = data));
  }

  onDeleteTask(taskId: number) {
    this.httpClient
      .post(`${ENV.apiUrl}/kanban/delete`, { taskId })
      .subscribe(() => this.getAllTasks());
  }
}
