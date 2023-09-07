import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCodeEntity } from 'auth/authCode.entity';
import { SendAuthCodeDto } from 'auth/dto/sendAuthCode.dto';
import * as process from 'process';
import { Repository } from 'typeorm';
import { AuthUserDto } from 'user/dto/auth-user.dto';
import { UserService } from 'user/user.service';
import { JwtService } from 'jwt/jwt.service';
import fetch from 'cross-fetch';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthCodeEntity)
    private authCodeRepository: Repository<AuthCodeEntity>,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: AuthUserDto) {
    const { code } = await this.authCodeRepository.findOneBy({
      phone: userDto.phone,
    });

    if (code !== userDto.code) {
      throw new UnauthorizedException('Неверный код!');
    }

    const user = await this.userService.create(userDto);

    return {
      user,
      token: this.jwtService.generateToken({
        userId: user.id,
        phone: userDto.phone,
      }),
    };
  }

  async sendAuthCode({ phone }: SendAuthCodeDto): Promise<string> {
    const response = await fetch(
      `https://sms.ru/code/call?phone=${phone}}&api_id=${process.env.SMS_KEY}`,
      {
        method: 'POST',
      },
    ).then((res) => res.json());

    const oldCode = await this.authCodeRepository.findOneBy({
      phone,
    });

    const code: string = response.code;
    if (oldCode) {
      oldCode.code = response.code;
      await this.authCodeRepository.save(oldCode);
    } else {
      const newCode = this.authCodeRepository.create({
        code,
        phone,
      });

      await this.authCodeRepository.save(newCode);
    }

    return code;
  }
}
