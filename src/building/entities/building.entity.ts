import { LocationEntity } from 'src/location/entities/location.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('building')
export class BuildingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'text',
  })
  name: string;

  @OneToMany(() => LocationEntity, (location) => location.building)
  locations: Location[];
}
