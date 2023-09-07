import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEquipmentDto } from 'equipment/dto/createEquipment.dto';
import { EquipmentEntity } from 'equipment/equipment.entity';
import { Repository } from 'typeorm';
import { UserService } from 'user/user.service';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(EquipmentEntity)
    private equipmentRepository: Repository<EquipmentEntity>,
    private userService: UserService,
  ) {}

  async create(
    createEquipmentDto: CreateEquipmentDto,
  ): Promise<EquipmentEntity> {
    const equipment = this.equipmentRepository.create(createEquipmentDto);

    await this.equipmentRepository.save(equipment);

    return equipment;
  }

  async getAllEquipment(userId: string): Promise<EquipmentEntity[]> {
    const user = await this.userService.getById(userId);
    return this.equipmentRepository.findBy({
      user,
    });
  }

  async getByIds(ids: string[]): Promise<EquipmentEntity[]> {
    const equipment = ids.map((id) =>
      this.equipmentRepository.findOneBy({ id }),
    );
    return await Promise.all(equipment);
  }

  getById(id: string): Promise<EquipmentEntity> {
    return this.equipmentRepository.findOneBy({
      id,
    });
  }
}
