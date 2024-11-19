import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { BuildingManagementLogger } from '../loggers/building-management-logger.logger';
import { tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: BuildingManagementLogger) {}
  intercept(context: ExecutionContext, next) {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;

    return next.handle().pipe(
      tap(() => {
        const res = context.switchToHttp().getResponse();
        this.logger.log(
          `IP: ${req.ip} Date: ${new Date()} Method: ${method} Url: ${url} Protocol: ${req.protocol} StatusCode: ${res.statusCode} Content-Length: ${
            req.headers['content-length'] || '0'
          } Host: ${req.headers.host.split(':')[1]}`,
        );
      }),
    );
  }
}
