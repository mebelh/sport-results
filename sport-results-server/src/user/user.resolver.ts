// import { Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
// import { Mutation } from 'type-graphql';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'user/dto/create-user.dto';
import { UserEntity } from 'user/user.entity';

// @Resolver(() => UserEntity)
export class UserResolver {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  // @Query(() => UserEntity)
  async getUserByPhone(phone: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({
      phone,
    });
  }

  // @Mutation(() => UserEntity)
  async updateUser(userData: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepository.create(userData);
    await this.userRepository.save(user);

    return user;
  }
}
