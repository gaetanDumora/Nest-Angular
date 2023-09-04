import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { questionProviders } from './question.provider';
import { QuestionService } from './question.service';

@Module({
  imports: [DatabaseModule],
  providers: [...questionProviders, QuestionService],
})
export class QuestionModule {}
