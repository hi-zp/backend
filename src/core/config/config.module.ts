import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import { HelperService } from '@common/helpers';
import { app, appConfigValidationSchema } from './app.config';
import { redis, redisConfigValidationSchema } from './redis.config';
import { cache, cacheConfigValidationSchema } from './cache.config';
import { sqlite, sqliteConfigValidationSchema } from './sqlite.config';

const provider = process.env.CACHE_PROVIDER;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [HelperService.getEnvFile()],
      load: [
        app,
        provider === 'redis' ? redis : (provider === 'sqlite' ? sqlite : cache),
      ].filter(_ => _),
      cache: true,
      isGlobal: true,
      expandVariables: true,
      validationSchema: Joi.object({
        ...appConfigValidationSchema,
        ...(provider === 'redis' ? redisConfigValidationSchema : (provider === 'sqlite' ? sqliteConfigValidationSchema : cacheConfigValidationSchema))
      }),
      validationOptions: {
        abortEarly: true,
        cache: !HelperService.isProd(),
        debug: !HelperService.isProd(),
        stack: !HelperService.isProd(),
      },
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class NestConfigModule {}
