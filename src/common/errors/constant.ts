import { HttpErrorCode } from './http-response.types';

export const ErrorCodeToStatusMap: Record<HttpErrorCode, number> = {
  [HttpErrorCode.VALIDATION_ERROR]: 400,
  [HttpErrorCode.UNAUTHORIZED]: 401,
  [HttpErrorCode.RESTRICTED_RESOURCE]: 403,
  [HttpErrorCode.UNAUTHORIZED_SHARE]: 403,
  [HttpErrorCode.NOT_FOUND]: 404,
  [HttpErrorCode.INTERNAL_SERVER_ERROR]: 500,
  [HttpErrorCode.DATABASE_CONNECTION_UNAVAILABLE]: 503,
  [HttpErrorCode.GATEWAY_TIMEOUT]: 504,
  [HttpErrorCode.UNKNOWN_ERROR_CODE]: 500,
};
