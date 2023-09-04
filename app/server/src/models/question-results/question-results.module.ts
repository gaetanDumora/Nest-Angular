import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { questionResultsProviders } from './question-results.provider';
import { QuestionResultsService } from './question-results.service';

@Module({
  imports: [DatabaseModule],
  providers: [...questionResultsProviders, QuestionResultsService],
})
export class QuestionResultsModule {}
