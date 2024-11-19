import { Body, Controller, Get, Post } from '@nestjs/common';
import { BuildingService } from './building.service';
import { CreateBuildingDto } from './dto/create-building.dto';

@Controller('buildings')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  async createBuilding(@Body() body: CreateBuildingDto) {
    return this.buildingService.createBuilding(body);
  }

  @Get()
  async getBuildings() {
    return this.buildingService.getBuildings();
  }
}
