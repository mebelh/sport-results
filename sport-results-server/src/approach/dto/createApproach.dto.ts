import { ResultEntity } from 'result/result.entity';

export class CreateApproachDto {
  result: ResultEntity;

  exerciseId: string;

  weight: number;

  repetitionsNumber: number;
}
