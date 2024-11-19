import { IsNumberString } from 'class-validator';

export class BuildingQueryParamsDto {
  @IsNumberString()
  id: number;
}
