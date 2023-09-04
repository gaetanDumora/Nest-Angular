import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { QuestionResults } from './question-results.entity';
import { PROVIDERS } from 'src/common/constants';

@Injectable()
export class QuestionResultsService {
  constructor(
    @Inject(PROVIDERS.qrRepo)
    private questionResultsRepository: Repository<QuestionResults>,
  ) {}

  async findAll(): Promise<QuestionResults[]> {
    return this.questionResultsRepository.find();
  }
}
