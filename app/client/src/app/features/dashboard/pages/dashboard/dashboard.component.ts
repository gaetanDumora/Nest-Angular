import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ENV } from 'environnement';
import { DashboardData } from '../../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  stats: DashboardData | undefined;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<DashboardData>(`${ENV.apiUrl}/dashboard`)
      .subscribe((data) => {
        this.stats = data;
      });
  }
}
