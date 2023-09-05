import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Modes } from './mode.entity';
import { PROVIDERS } from 'src/common/constants';

@Injectable()
export class ModeService {
  constructor(
    @Inject(PROVIDERS.modeRepo)
    private modeRepository: Repository<Modes>,
  ) {}

  async findAll(): Promise<Modes[]> {
    return this.modeRepository.find();
  }
}
