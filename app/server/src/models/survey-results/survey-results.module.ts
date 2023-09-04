import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { surveyResultsProviders } from './survey-results.provider';
import { SurveyResultsService } from './survey-results.service';

@Module({
  imports: [DatabaseModule],
  providers: [...surveyResultsProviders, SurveyResultsService],
})
export class SurveyResultsModule {}
