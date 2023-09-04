import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SurveyResults } from './survey-results.entity';
import { PROVIDERS } from 'src/common/constants';

@Injectable()
export class SurveyResultsService {
  constructor(
    @Inject(PROVIDERS.srRepo)
    private surveyResultsRepository: Repository<SurveyResults>,
  ) {}

  async findAll(): Promise<SurveyResults[]> {
    return this.surveyResultsRepository.find();
  }
}
