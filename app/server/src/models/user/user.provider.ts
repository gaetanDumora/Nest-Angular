import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { PROVIDERS } from 'src/common/constants';

export const userProviders = [
  {
    provide: PROVIDERS.userRepo,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [PROVIDERS.database],
  },
];
