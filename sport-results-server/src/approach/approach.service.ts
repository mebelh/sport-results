import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApproachEntity } from 'approach/approach.entity';
import { CreateApproachDto } from 'approach/dto/createApproach.dto';
import { ExerciseService } from 'exercises/exercises.service';
import { Repository } from 'typeorm';

@Injectable()
export class ApproachService {
  constructor(
    @InjectRepository(ApproachEntity)
    private approachRepository: Repository<ApproachEntity>,
    private exerciseService: ExerciseService,
  ) {}

  async create({
    result,
    repetitionsNumber,
    weight,
    exerciseId,
  }: CreateApproachDto): Promise<ApproachEntity> {
    const exercise = await this.exerciseService.getById(exerciseId);

    const approach = this.approachRepository.create({
      result,
      exercise,
      weight,
      repetitionsNumber,
    });

    await this.approachRepository.save(approach);

    return approach;
  }
}
