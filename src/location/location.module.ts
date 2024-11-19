import { Module } from '@nestjs/common';
import { BuildingModule } from 'src/building/building.module';
import { DatabaseModule } from 'src/common/database/database.module';
import { LocationEntity } from './entities/location.entity';
import { LocationController } from './location.controller';
import { LocationRepository } from './location.repository';
import { LocationService } from './location.service';

@Module({
  imports: [BuildingModule, DatabaseModule.forFeature([LocationEntity])],
  controllers: [LocationController],
  providers: [LocationService, LocationRepository],
})
export class LocationModule {}
