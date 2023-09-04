import { PROVIDERS } from 'src/common/constants';
import { Mode } from 'src/models/mode/mode.entity';
import { QuestionResults } from 'src/models/question-results/question-results.entity';
import { Question } from 'src/models/question/question.entity';
import { SurveyResults } from 'src/models/survey-results/survey-results.entity';
import { User } from 'src/models/user/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: PROVIDERS.database,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT, 10),
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DB_NAME,
        entities: [User, Question, Mode, QuestionResults, SurveyResults],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
