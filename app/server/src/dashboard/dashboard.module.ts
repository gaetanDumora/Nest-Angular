import { Module } from '@nestjs/common';
import { dashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { userProviders } from 'src/models/user/user.provider';
import { DatabaseModule } from 'src/database/database.module';
import { modeProviders } from 'src/models/mode/mode.provider';
import { UserService } from 'src/models/user/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [dashboardController],
  providers: [
    ...userProviders,
    ...modeProviders,
    DashboardService,
    UserService,
  ],
})
export class DashboardModule {}
