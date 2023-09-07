import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercisesModule } from 'exercises/exercises.module';
import { UserModule } from 'user/user.module';
import { WorkoutEntity } from 'workout/workout.entity';
import { WorkoutService } from './workout.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutEntity]),
    forwardRef(() => UserModule),
    ExercisesModule,
  ],
  providers: [WorkoutService],
  exports: [WorkoutService],
})
export class WorkoutModule {}
