import { ValidationPipeOptions } from "@nestjs/common";
import { HelperService } from "./helpers.utils";

export const AppUtils = {
  validationPipeOptions(): ValidationPipeOptions {
    return {
      whitelist: true,
      transform: true,
      forbidUnknownValues: false,
      validateCustomDecorators: true,
      enableDebugMessages: HelperService.isDev(),
    };
  },
}