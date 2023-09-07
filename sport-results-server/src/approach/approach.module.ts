import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApproachEntity } from 'approach/approach.entity';
import { ApproachService } from 'approach/approach.service';
import { EquipmentModule } from 'equipment/equipment.module';
import { ExercisesModule } from 'exercises/exercises.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ApproachEntity]),
    EquipmentModule,
    ExercisesModule,
  ],
  providers: [ApproachService],
  exports: [ApproachService],
})
export class ApproachModule {}
