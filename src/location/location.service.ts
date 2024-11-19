import { Injectable } from '@nestjs/common';
import { BuildingService } from 'src/building/building.service';
import { BuildingQueryParamsDto } from './dtos/building-query-params.dto';
import { CreateLocationDto } from './dtos/create-location.dto';
import { LocationEntity } from './entities/location.entity';
import { LocationRepository } from './location.repository';
import { BuildingManagementLogger } from 'src/common/loggers/building-management-logger.logger';

@Injectable()
export class LocationService {
  constructor(
    private readonly buildingService: BuildingService,
    private readonly locationRepository: LocationRepository,
    private readonly logger: BuildingManagementLogger,
  ) {
    this.logger.setContext(LocationService.name);
  }

  async createLocation(
    buildingQueryParamsDto: BuildingQueryParamsDto,
    createLocationdto: CreateLocationDto,
  ): Promise<LocationEntity> {
    this.logger.log(
      `Create location: ${JSON.stringify(createLocationdto)} in building: ${buildingQueryParamsDto}`,
    );
    await this.buildingService.checkBuildingExist(buildingQueryParamsDto.id);
    return this.locationRepository.createAndSave(createLocationdto);
  }
}
