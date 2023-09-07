export class CreateResultDto {
  name: string;

  exercise: string[];

  userId: string;
}

export class AddApproachDto {
  resultId: string
  exerciseId: string
  repetitionsNumber: number
  weight: number
}
