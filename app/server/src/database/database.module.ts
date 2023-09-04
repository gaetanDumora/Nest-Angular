import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/postgres.provider';

@Module({ providers: [...databaseProviders], exports: [...databaseProviders] })
export class DatabaseModule {}
