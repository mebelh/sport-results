import { EquipmentEntity } from 'equipment/equipment.entity';
import { ExerciseEntity } from 'exercises/exercise.entity';
import { ResultEntity } from 'result/result.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { WorkoutEntity } from 'workout/workout.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') // генерирует уникальный идентификатор для каждого пользователя
  id: string;

  @Column({ type: 'varchar', nullable: true, default: null }) // электронная почта, может быть null
  email: string;

  @Column({ type: 'varchar', default: 'user' }) // роль пользователя (администратор, пользователь и т.д.)
  role: string;

  @Column({ type: 'varchar', unique: true })
  phone: string;

  @CreateDateColumn() // дата и время создания учетной записи
  createdAt: Date;

  @UpdateDateColumn() // дата и время последнего обновления учетной записи
  updatedAt: Date;

  @OneToMany(() => ExerciseEntity, (exercise) => exercise.user)
  exercises: ExerciseEntity[];

  @OneToMany(() => ResultEntity, (result) => result.user)
  results: ResultEntity[];

  @OneToMany(() => EquipmentEntity, (equipment) => equipment.user)
  equipment: EquipmentEntity[];

  @OneToMany(() => WorkoutEntity, (workout) => workout.user)
  workouts: WorkoutEntity[];
}
