import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { PROVIDERS } from 'src/common/constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(PROVIDERS.userRepo)
    private userRepository: Repository<User>,
  ) {}

  async getWorkSituations() {
    return this.userRepository
      .createQueryBuilder('user')
      .select(['user.worksituation', 'COUNT(*) as num'])
      .groupBy('user.worksituation')
      .getRawMany();
  }

  async getGenders() {
    return this.userRepository
      .createQueryBuilder('user')
      .select(['user.gender', 'COUNT(*) as num'])
      .groupBy('user.gender')
      .getRawMany();
  }
  async getDegrees() {
    return this.userRepository
      .createQueryBuilder('user')
      .select(['user.degree', 'COUNT(*) as num'])
      .groupBy('user.degree')
      .getRawMany();
  }
  async getCreationPerMonths() {
    return this.userRepository
      .createQueryBuilder('user')
      .select([
        "TO_CHAR(createdat, 'Month YYYY') AS month_name",
        'COUNT(*) AS num',
      ])
      .groupBy("TO_CHAR(createdat, 'Month YYYY')")
      .orderBy("TO_CHAR(createdat, 'Month YYYY')")
      .getRawMany();
  }
}
