import process from 'node:process';
import { registerAs } from '@nestjs/config';
import Joi from 'joi';

export const cacheConfigValidationSchema = {
  CACHE_PROVIDER: Joi.string().valid('redis', 'sqlite', 'memory').required(),
  CACHE_TTL: Joi.number().integer().min(1).required(),
};

export const cache = registerAs('cache', () => ({
  provider: process.env.CACHE_PROVIDER,
  ttl: +process.env.CACHE_TTL,
}));
