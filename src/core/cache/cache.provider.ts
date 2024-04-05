import path from 'node:path';
import KeyvRedis from '@keyv/redis';
import KeyvSqlite from '@keyv/sqlite';
import type { Provider } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import * as fse from 'fs-extra';
import Keyv from 'keyv';
import { match } from 'ts-pattern';
import { CacheService } from './cache.service';
import { ConfigService } from '@nestjs/config';

export const CacheProvider: Provider = {
  provide: CacheService,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService<Configs, true>) => {
    const cache = configService.get('cache', { infer: true });
    const sqlite = configService.get('sqlite', { infer: true });
    const redis = configService.get('redis', { infer: true });

    Logger.log(`[Cache Manager Adapter]: ${cache.provider}`);

    const store = match(cache.provider)
      .with('memory', () => new Map())
      .with('sqlite', () => {
        const uri = sqlite.uri.replace(/^sqlite:\/\//, '');
        fse.ensureFileSync(uri);

        Logger.log(`[Cache Manager File Path]: ${path.resolve(uri)}`);

        return new KeyvSqlite({
          ...sqlite,
          uri,
        });
      })
      .with('redis', () => new KeyvRedis(redis.url, { useRedisSets: false }))
      .exhaustive();

    const keyv = new Keyv({ namespace: 'teable_cache', store: store });
    keyv.on('error', (error) => {
      error && Logger.error(error, 'Cache Manager Connection Error');
    });

    Logger.log(`[Cache Manager Namespace]: ${keyv.opts.namespace}`);
    return new CacheService(keyv, configService);
  },
};
