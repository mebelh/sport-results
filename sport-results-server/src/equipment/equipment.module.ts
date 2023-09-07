import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentEntity } from 'equipment/equipment.entity';
import { UserModule } from 'user/user.module';
import { EquipmentService } from './equipment.service';

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentEntity]), UserModule],
  providers: [EquipmentService],
  exports: [EquipmentService],
})
export class EquipmentModule {}
