import { Injectable } from '@nestjs/common';
import { UserService } from 'src/models/user/user.service';

@Injectable()
export class DashboardService {
  constructor(private userService: UserService) {}

  async getPageStats() {
    const [workSituations, genders, degrees, usersCreation] = await Promise.all(
      [
        this.userService.getWorkSituations(),
        this.userService.getGenders(),
        this.userService.getDegrees(),
        this.userService.getCreationPerMonths(),
      ],
    );

    return {
      usersCreation: Object.assign(
        {},
        ...usersCreation.map((user) => ({
          [user.month_name]: user.num,
        })),
      ),
      degrees: Object.assign(
        {},
        ...degrees.map((degree) => ({
          [degree.user_degree]: degree.num,
        })),
      ),
      workSituations: Object.assign(
        {},
        ...workSituations.map((situation) => ({
          [situation.worksituation]: situation.num,
        })),
      ),
      genders: Object.assign(
        {},
        ...genders.map((gender) => ({
          [gender.user_gender]: gender.num,
        })),
      ),
    };
  }
}
