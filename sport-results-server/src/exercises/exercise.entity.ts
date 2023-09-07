import { ApproachEntity } from 'approach/approach.entity';
import { EquipmentEntity } from 'equipment/equipment.entity';
import { ResultEntity } from 'result/result.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JoinTable } from 'typeorm';
import { UserEntity } from 'user/user.entity';
import { WorkoutEntity } from 'workout/workout.entity';

@Entity('exercise')
export class ExerciseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => EquipmentEntity, (equipment) => equipment.exercise)
  @JoinTable()
  equipment: EquipmentEntity[];

  @ManyToOne(() => UserEntity, (user) => user.exercises)
  user: UserEntity;

  @Column('text')
  name: string;

  @OneToMany(() => ResultEntity, (result) => result)
  workout: WorkoutEntity[];

  @OneToMany(() => ApproachEntity, (approach) => approach.exercise)
  approaches: ApproachEntity[];
}
