import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller()
export class dashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('dashboard')
  async getPageStats() {
    return await this.dashboardService.getPageStats();
  }
}
