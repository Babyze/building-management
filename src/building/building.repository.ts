import { InjectRepository } from '@nestjs/typeorm';
import { BaseAbstractRepository } from 'src/common/database/base.repository';
import { BuildingEntity } from './entities/building.entity';
import { Repository } from 'typeorm';
import { DatabaseInterfaceRepository } from 'src/common/database/database.interface';

export class BuildingRepository
  extends BaseAbstractRepository<BuildingEntity>
  implements DatabaseInterfaceRepository<BuildingEntity>
{
  constructor(
    @InjectRepository(BuildingEntity)
    private readonly buildingRepository: Repository<BuildingEntity>,
  ) {
    super(buildingRepository);
  }
}
