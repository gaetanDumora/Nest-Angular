import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [DashboardComponent, ChartComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
