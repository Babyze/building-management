import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { BuildingManagementLogger } from './common/loggers/building-management-logger.logger';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const logger = new BuildingManagementLogger();
  app.useLogger(logger);
  app.useGlobalFilters(new HttpExceptionFilter(logger));
  app.useGlobalInterceptors(new LoggingInterceptor(logger));

  const config = app.get(ConfigService);
  await app.listen(config.get('PORT'));
}
bootstrap();
