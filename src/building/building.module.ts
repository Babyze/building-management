import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { BuildingService } from './building.service';
import { BuildingEntity } from './entities/building.entity';
import { BuildingRepository } from './building.repository';
import { BuildingController } from './building.controller';

@Module({
  imports: [DatabaseModule.forFeature([BuildingEntity])],
  controllers: [BuildingController],
  providers: [BuildingService, BuildingRepository],
  exports: [BuildingService],
})
export class BuildingModule {}
