import { DataSource } from 'typeorm';
import { Modes } from './mode.entity';
import { PROVIDERS } from 'src/common/constants';

export const modeProviders = [
  {
    provide: PROVIDERS.modeRepo,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Modes),
    inject: [PROVIDERS.database],
  },
];
