import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApproachEntity } from 'approach/approach.entity';
import { ApproachModule } from 'approach/approach.module';
import { ApproachService } from 'approach/approach.service';
import { AddApproachDto, CreateResultDto } from 'result/dto/createResult.dto';
import { ResultEntity } from 'result/result.entity';
import { Repository } from 'typeorm';
import { UserService } from 'user/user.service';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(ResultEntity)
    private resultRepository: Repository<ResultEntity>,
    @Inject(UserService)
    private userService: UserService,
    @Inject(ApproachService)
    private approachService: ApproachService,
  ) {}

  getById(id: string): Promise<ResultEntity> {
    return this.resultRepository.findOneBy({ id });
  }

  async startWorkout(createResultDto: CreateResultDto): Promise<ResultEntity> {
    const user = await this.userService.getById(createResultDto.userId);
    const result = this.resultRepository.create({
      user,
    });
    await this.resultRepository.save(result);
    return result;
  }

  async addApproach({
    resultId,
    exerciseId,
    repetitionsNumber,
    weight,
  }: AddApproachDto): Promise<ApproachEntity> {
    const result = await this.resultRepository.findOneBy({
      id: resultId,
    });

    const newApproach = await this.approachService.create({
      result,
      weight,
      exerciseId,
      repetitionsNumber,
    });

    result.approaches.push(newApproach);

    await this.resultRepository.save(result);

    return newApproach;
  }
}
