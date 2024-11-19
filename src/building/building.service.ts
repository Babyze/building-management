import { Injectable, NotFoundException } from '@nestjs/common';
import { BuildingManagementLogger } from 'src/common/loggers/building-management-logger.logger';
import { BuildingRepository } from './building.repository';
import { CreateBuildingDto } from './dto/create-building.dto';
import { BuildingEntity } from './entities/building.entity';

@Injectable()
export class BuildingService {
  constructor(
    private readonly buildingRepository: BuildingRepository,
    private readonly logger: BuildingManagementLogger,
  ) {
    this.logger.setContext(BuildingService.name);
  }

  async createBuilding(
    createBuildingDto: CreateBuildingDto,
  ): Promise<BuildingEntity> {
    this.logger.log(
      `Create building with data: ${JSON.stringify(createBuildingDto)}`,
    );

    return this.buildingRepository.createAndSave(createBuildingDto);
  }

  async getBuildings(): Promise<BuildingEntity[]> {
    return this.buildingRepository.findAll();
  }

  async checkBuildingExist(buildingId: number): Promise<void> {
    this.logger.log(
      `Check building: ${JSON.stringify(buildingId)} exist status`,
    );

    const building = await this.buildingRepository.findOne({
      where: { id: buildingId },
    });

    if (!building) {
      throw new NotFoundException();
    }
  }
}
