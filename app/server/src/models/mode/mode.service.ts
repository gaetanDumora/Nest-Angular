import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Mode } from './mode.entity';
import { PROVIDERS } from 'src/common/constants';

@Injectable()
export class ModeService {
  constructor(
    @Inject(PROVIDERS.modeRepo)
    private modeRepository: Repository<Mode>,
  ) {}

  async findAll(): Promise<Mode[]> {
    return this.modeRepository.find();
  }
}
