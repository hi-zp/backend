import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import {
  BadRequestException,
  Catch,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomHttpException, getDefaultCodeByStatus } from '@common/exception';
import { HttpErrorCode } from '@common/errors';
import type { FastifyReply, FastifyRequest } from 'fastify';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private logger = new Logger(GlobalExceptionFilter.name);

  constructor(private readonly configService: ConfigService<Configs, true>) {}

  catch(exception: Error | HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();

    if (
      !(
        exception instanceof BadRequestException ||
        exception instanceof UnauthorizedException ||
        exception instanceof ForbiddenException ||
        exception instanceof NotFoundException
      )
    ) {
      this.logError(exception, request);
    }

    if (exception instanceof CustomHttpException) {
      const customException = exception as CustomHttpException;
      const status = customException.getStatus();
      return response.status(status).send({
        message: exception.message,
        status: status,
        code: customException.code,
      });
    }

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      return response
        .status(status)
        .send({ message: exception.message, status, code: getDefaultCodeByStatus(status) });
    }

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      message: 'Internal Server Error',
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: HttpErrorCode.INTERNAL_SERVER_ERROR,
    });
  }

  protected logError(exception: Error, request: FastifyRequest) {
    this.logger.error(
      {
        url: request?.url,
        message: exception.message,
      },
      exception.stack
    );
  }
}
