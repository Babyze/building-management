import { Module } from '@nestjs/common';
import { BuildingModule } from './building/building.module';
import { DatabaseModule } from './common/database/database.module';
import { LocationModule } from './location/location.module';
import { LoggerModule } from './common/loggers/LoggerModule.module';

@Module({
  imports: [DatabaseModule, LoggerModule, BuildingModule, LocationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
