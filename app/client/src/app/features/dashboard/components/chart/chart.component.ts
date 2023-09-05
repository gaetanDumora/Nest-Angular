import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ChartTypes } from '../../models/dashboard.model';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements AfterViewInit {
  @Input() chartLabel!: string;
  @Input() chartType!: ChartTypes;
  @Input() chartData!: Record<string, unknown>;
  chart!: Chart;

  constructor() {
    Chart.register(...registerables);
  }
  ngAfterViewInit(): void {
    this.createChart();
  }
  createChart() {
    const isDoughnut = this.chartType === 'doughnut';
    const scaleOptions = {
      grid: {
        display: !isDoughnut,
        color: 'grey',
      },
      ticks: {
        display: !isDoughnut,
        color: 'white',
      },
    };
    this.chart = document.getElementById(this.chartLabel) as unknown as Chart;
    new Chart(this.chart, {
      type: this.chartType,
      data: {
        labels: Object.keys(this.chartData),
        datasets: [
          {
            data: Object.values(this.chartData),
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: isDoughnut, labels: { color: 'white' } },
        },
        scales: {
          x: scaleOptions,
          y: scaleOptions,
        },
      },
    });
  }
}
