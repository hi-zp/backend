import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import { HelperService } from '@common/helpers';
import { app, appConfigValidationSchema } from './app.config';
import { redis, redisConfigValidationSchema } from './redis.config';

const services = HelperService.getServices();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [HelperService.getEnvFile()],
      load: [
        app,
        services.redis ? redis : undefined
      ].filter(_ => _),
      cache: true,
      isGlobal: true,
      expandVariables: true,
      validationSchema: Joi.object({
        ...appConfigValidationSchema,
        ...(services.redis ? redisConfigValidationSchema : {})
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
