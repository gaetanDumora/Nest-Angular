import { DataSource } from 'typeorm';
import { QuestionResults } from './question-results.entity';
import { PROVIDERS } from 'src/common/constants';

export const questionResultsProviders = [
  {
    provide: PROVIDERS.qrRepo,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(QuestionResults),
    inject: [PROVIDERS.database],
  },
];
