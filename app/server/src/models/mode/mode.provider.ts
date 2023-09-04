import { DataSource } from 'typeorm';
import { Mode } from './mode.entity';
import { PROVIDERS } from 'src/common/constants';

export const modeProviders = [
  {
    provide: PROVIDERS.modeRepo,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Mode),
    inject: [PROVIDERS.database],
  },
];
