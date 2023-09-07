import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApproachService } from 'approach/approach.service';
import { AuthModule } from 'auth/auth.module';
import { ResultEntity } from 'result/result.entity';
import { UserModule } from 'user/user.module';
import { ResultService } from './result.service';
import { ApproachModule } from 'approach/approach.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResultEntity]),
    AuthModule,
    ApproachModule,
    UserModule,
  ],
  providers: [ResultService],
  exports: [ResultService],
})
export class ResultModule {}
