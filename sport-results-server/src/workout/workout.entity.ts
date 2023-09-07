import { ExerciseEntity } from 'exercises/exercise.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from 'user/user.entity';

@Entity('workout')
export class WorkoutEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => ExerciseEntity, (exercise) => exercise.workout)
  exercises: ExerciseEntity[];

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.workouts)
  user: UserEntity;
}
