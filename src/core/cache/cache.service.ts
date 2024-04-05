import { Injectable } from '@nestjs/common';
import { type Store } from 'keyv';
import type { ICacheStore } from './types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CacheService {
  constructor(
    private readonly cacheManager: Store<any>,
    private readonly configService: ConfigService<Configs, true>
  ) {}

  async get<TKey extends keyof ICacheStore>(key: TKey): Promise<ICacheStore[TKey] | undefined> {
    return this.cacheManager.get(key);
  }

  async set<TKey extends keyof ICacheStore>(
    key: TKey,
    value: ICacheStore[TKey],
    ttl?: number
  ): Promise<void> {
    ttl = ttl || this.configService.get('cache.ttl', { infer: true });
    await this.cacheManager.set(key, value, ttl ? ttl * 1000 : undefined);
  }

  async del<TKey extends keyof ICacheStore>(key: TKey): Promise<void> {
    await this.cacheManager.delete(key);
  }
}
