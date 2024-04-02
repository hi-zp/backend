import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import type { Cache } from 'cache-manager';

// https://docs.nestjs.com/techniques/caching#interacting-with-the-cache-store
@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  /**
   * It deletes all cache keys that match the given regular expression
   * @param regexString - The regex string to match against the cache keys.
   * @returns A boolean value.
   */
  async deleteMatch(regexString: string): Promise<boolean> {
    const keys = await this.cacheManager.store.keys();
    const regex = new RegExp(regexString, 'i');
    const match = keys.filter((key: string) => regex.test(key));

    const deletePromises = match.map((key: string) => {
      return this.cacheManager.del(key);
    });

    await Promise.all(deletePromises);

    return true;
  }

  /**
   * Reset the cache.
   * @returns A promise that resolves to void.
   */
  async resetCache(): Promise<void> {
    return this.cacheManager.reset();
  }
}
