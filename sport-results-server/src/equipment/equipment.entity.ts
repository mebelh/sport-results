import { ExerciseEntity } from 'exercises/exercise.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from 'user/user.entity';

@Entity('equipment')
export class EquipmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @ManyToMany(() => ExerciseEntity, (exercise) => exercise.equipment)
  exercise: ExerciseEntity;

  @ManyToOne(() => UserEntity, (user) => user.equipment)
  user: UserEntity;
}
