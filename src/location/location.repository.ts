import { InjectRepository } from '@nestjs/typeorm';
import { BaseAbstractRepository } from 'src/common/database/base.repository';
import { DatabaseInterfaceRepository } from 'src/common/database/database.interface';
import { Repository } from 'typeorm';
import { LocationEntity } from './entities/location.entity';

export class LocationRepository
  extends BaseAbstractRepository<LocationEntity>
  implements DatabaseInterfaceRepository<LocationEntity>
{
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepository: Repository<LocationEntity>,
  ) {
    super(locationRepository);
  }
}
