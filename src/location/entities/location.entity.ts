import { BuildingEntity } from 'src/building/entities/building.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('location')
export class LocationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'text',
  })
  name: string;

  @ManyToOne(() => BuildingEntity, (building) => building.locations)
  building: BuildingEntity;
}
