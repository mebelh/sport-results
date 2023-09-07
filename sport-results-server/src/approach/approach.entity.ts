import { ExerciseEntity } from 'exercises/exercise.entity';
import { ResultEntity } from 'result/result.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('approach')
export class ApproachEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ResultEntity, (result) => result.approaches)
  result: ResultEntity;

  @ManyToOne(() => ExerciseEntity, (exercise) => exercise.approaches)
  exercise: ExerciseEntity;

  @Column('int', { default: 0 })
  repetitionsNumber: number;

  @Column('int', { default: 0 })
  weight: number;
}
