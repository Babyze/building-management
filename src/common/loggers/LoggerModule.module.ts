import { Global, Module } from '@nestjs/common';
import { BuildingManagementLogger } from './building-management-logger.logger';

@Global()
@Module({
  providers: [BuildingManagementLogger],
  exports: [BuildingManagementLogger],
})
export class LoggerModule {}
