import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'user/dto/create-user.dto';
import { UserEntity } from 'user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getUserByPhone(phone): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        phone,
      },
    });
  }

  async create(userDto: CreateUserDto): Promise<UserEntity> {
    // Проверяем, что пользователь с таким именем или email ещё не существует
    const existingUser = await this.userRepository.findOne({
      where: [{ phone: userDto.phone }],
    });
    if (existingUser) {
      throw new Error('User with this username or email already exists');
    }

    const newUser = this.userRepository.create(userDto);

    await this.userRepository.save(newUser);
    return newUser;
  }

  async getById(id: string) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}
