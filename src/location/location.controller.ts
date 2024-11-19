import { Body, Controller, Param, Post } from '@nestjs/common';
import { LocationService } from './location.service';
import { BuildingQueryParamsDto } from './dtos/building-query-params.dto';
import { CreateLocationDto } from './dtos/create-location.dto';

@Controller('buildings/:id/locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  async createLocation(
    @Param() params: BuildingQueryParamsDto,
    @Body() body: CreateLocationDto,
  ) {
    return this.locationService.createLocation(params, body);
  }
}
