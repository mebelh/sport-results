import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from 'exercises/exercise.entity';
import { ExerciseService } from 'exercises/exercises.service';
import { EquipmentModule } from 'equipment/equipment.module';
import { UserModule } from 'user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExerciseEntity]),
    EquipmentModule,
    UserModule,
  ],
  providers: [ExerciseService, EquipmentModule, UserModule],
  exports: [ExerciseService],
})
export class ExercisesModule {}
