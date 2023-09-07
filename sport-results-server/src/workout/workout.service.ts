import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseService } from 'exercises/exercises.service';
import { CreateWorkoutDto } from 'workout/dto/createWorkout.dto';
import { Repository } from 'typeorm';
import { UserService } from 'user/user.service';
import { WorkoutEntity } from 'workout/workout.entity';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(WorkoutEntity)
    private workoutRepository: Repository<WorkoutEntity>,
    private userService: UserService,
    private exerciseService: ExerciseService,
  ) {}

  async create({
    name,
    description,
    userId,
    exerciseIds,
  }: CreateWorkoutDto): Promise<WorkoutEntity> {
    const exercises = exerciseIds.map((id) => this.exerciseService.getById(id));
    const user = await this.userService.getById(userId);

    const workout = this.workoutRepository.create({
      user,
      exercises: await Promise.all(exercises),
      name,
      description,
    });

    await this.workoutRepository.save(workout);

    return workout;
  }

  getById(id: string): Promise<WorkoutEntity> {
    return this.workoutRepository.findOneBy({ id });
  }
}
