import { ConfigType } from "@nestjs/config";
import { app } from "./app.config";
import { redis } from "./redis.config";
import { cache } from "./cache.config";
import { sqlite } from "./sqlite.config";

export interface Config {
  app: ConfigType<typeof app>;
  cache: ConfigType<typeof cache>;
  redis: ConfigType<typeof redis>;
  sqlite: ConfigType<typeof sqlite>;
}