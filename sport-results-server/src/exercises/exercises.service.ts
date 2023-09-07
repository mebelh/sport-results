import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExerciseDto } from 'exercises/dto/createExercise.dto';
import { ExerciseEntity } from 'exercises/exercise.entity';
import { EquipmentService } from 'equipment/equipment.service';
import { Repository } from 'typeorm';
import { UserService } from 'user/user.service';

@Injectable()
export class ExerciseService {
  constructor(
    private equipmentService: EquipmentService,
    @InjectRepository(ExerciseEntity)
    private exercisesRepository: Repository<ExerciseEntity>,
    private userService: UserService,
  ) {}

  async getAllExercises() {
    const exercises = await this.exercisesRepository.find();

    return {
      exercises,
    };
  }

  async createExercise({ equipmentIds, userId, name }: CreateExerciseDto) {
    const equipment = await this.equipmentService.getByIds(equipmentIds);
    const user = await this.userService.getById(userId);
    const exercise = this.exercisesRepository.create({
      user,
      name,
    });
    exercise.equipment = equipment;
    await this.exercisesRepository.save(exercise);
    return exercise;
  }

  getById(id: string) {
    return this.exercisesRepository.findOneBy({ id });
  }
}
