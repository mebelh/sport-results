import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthCodeEntity } from 'auth/authCode.entity';
import { UserModule } from 'user/user.module';
import { AuthService } from './auth.service';
import { JwtModule } from 'jwt/jwt.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AuthCodeEntity]), JwtModule, UserModule],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
