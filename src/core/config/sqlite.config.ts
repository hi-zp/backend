import process from 'node:process';
import { registerAs } from '@nestjs/config';
import Joi from 'joi';

export const sqliteConfigValidationSchema = {
  SQLITE_URL: Joi.string().required(),
};

export const sqlite = registerAs('sqlite', () => ({
  uri: process.env.SQLITE_URL,
}));
