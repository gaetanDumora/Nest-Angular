import { DataSource } from 'typeorm';
import { Task } from './task.entity';
import { PROVIDERS } from 'src/common/constants';

export const taskProviders = [
  {
    provide: PROVIDERS.taskRepo,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
    inject: [PROVIDERS.database],
  },
];
