import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { modeProviders } from './mode.provider';

@Module({ imports: [DatabaseModule], providers: [...modeProviders] })
export class ModeModule {}
