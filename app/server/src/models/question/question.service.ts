import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { PROVIDERS } from 'src/common/constants';

@Injectable()
export class QuestionService {
  constructor(
    @Inject(PROVIDERS.questionRepo)
    private questionRepository: Repository<Question>,
  ) {}

  async findAll(): Promise<Question[]> {
    return this.questionRepository.find();
  }
}
