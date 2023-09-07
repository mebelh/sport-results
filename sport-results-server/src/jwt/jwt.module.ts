import { Module } from '@nestjs/common';
import { PRIVATE_KEY } from '../constants';
import { JwtService } from './jwt.service';
import { JwtModule as JWTModule } from '@nestjs/jwt';

@Module({
  providers: [JwtService],
  imports: [
    JWTModule.register({
      secret: PRIVATE_KEY || 'secret',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  exports: [JwtService],
})
export class JwtModule {}
