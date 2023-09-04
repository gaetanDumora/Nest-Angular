import { DataSource } from 'typeorm';
import { Question } from './question.entity';
import { PROVIDERS } from 'src/common/constants';

export const questionProviders = [
  {
    provide: PROVIDERS.questionRepo,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Question),
    inject: [PROVIDERS.database],
  },
];
