import process from 'node:process';
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

const envFile = `${process.cwd()}/env/.env.${process.env.NODE_ENV}`;

dotenvExpand.expand(dotenv.config({ path: envFile }))

export const HelperService = {
  getEnvFile() {
    return envFile;
  },

  /* The `isDev()` function is checking if the value of the `NODE_ENV` environment variable starts with
  the string "dev". It returns `true` if the environment is set to development, and `false` otherwise.
  This function is used to determine if the application is running in a development environment. */
  isDev(): boolean {
    return process.env.NODE_ENV.startsWith('dev');
  },

  /* The `isProd()` function is checking if the value of the `NODE_ENV` environment variable starts with
  the string "prod". It returns `true` if the environment is set to production, and `false` otherwise.
  This function is used to determine if the application is running in a production environment. */
  isProd(): boolean {
    return process.env.NODE_ENV.startsWith('prod');
  },

  /**
   * Get services status
   * @returns object { redis: boolean }
   */
  getServices() {
    return {
      redis: !!process.env.REDIS_HOST,
    };
  }
}