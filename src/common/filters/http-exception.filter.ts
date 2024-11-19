import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Request, Response } from 'express';
import { BuildingManagementLogger } from '../loggers/building-management-logger.logger';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: BuildingManagementLogger) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const context: HttpArgumentsHost = host.switchToHttp();
    const request: Request = context.getRequest();
    const response: Response = context.getResponse();
    const status: HttpStatus = exception.getStatus();
    const messageErrors = exception.getResponse() as any;

    response.status(status).json({
      ...messageErrors,
      timestamp: new Date().toISOString(),
      path: request.url,
    });

    let message = `IP: ${request.ip} Date: ${new Date()} Method: ${request.method} Url: ${request.url} Protocol: ${request.protocol} StatusCode: ${response.statusCode} ${
      request.headers['content-length'] || '0'
    } ${request.headers.host.split(':')[1]}`;

    if (request.body) {
      message += ` Body: ${JSON.stringify(request.body)}`;
    }

    message += ` ${JSON.stringify(exception.getResponse())}`;

    this.logger.error(message);
  }
}
