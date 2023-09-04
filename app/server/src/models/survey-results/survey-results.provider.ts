import { DataSource } from 'typeorm';
import { SurveyResults } from './survey-results.entity';
import { PROVIDERS } from 'src/common/constants';

export const surveyResultsProviders = [
  {
    provide: PROVIDERS.srRepo,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SurveyResults),
    inject: [PROVIDERS.database],
  },
];
