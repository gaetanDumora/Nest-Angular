import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { PROVIDERS } from 'src/common/constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(PROVIDERS.userRepo)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
