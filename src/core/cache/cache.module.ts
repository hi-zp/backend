import { ConfigurableModuleBuilder, type DynamicModule, Module } from '@nestjs/common';
import { CacheProvider } from './cache.provider';

export interface CacheModuleOptions {
  global?: boolean;
}

export const { ConfigurableModuleClass: CacheModuleClass, OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<CacheModuleOptions>().build();

@Module({
  providers: [CacheProvider],
  exports: [CacheProvider],
})
export class NestCacheModule extends CacheModuleClass {
  static register(options: typeof OPTIONS_TYPE): DynamicModule {
    return {
      global: options.global,
      ...super.register(options),
    };
  }
}
