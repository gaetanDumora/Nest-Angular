import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { ModeModule } from './mode/mode.module';
import { QuestionResultsModule } from './question-results/question-results.module';
import { SurveyResultsModule } from './survey-results/survey-results.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    UserModule,
    QuestionModule,
    ModeModule,
    QuestionResultsModule,
    SurveyResultsModule,
    TaskModule,
  ],
})
export class ModelsModule {}
