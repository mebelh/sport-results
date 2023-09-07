import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from 'auth/auth.service';
import { SendAuthCodeDto } from 'auth/dto/sendAuthCode.dto';
import { AuthUserDto } from 'user/dto/auth-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('sendVerifyCode')
  sendVerifyCode(@Body() sendAuthCodeDto: SendAuthCodeDto) {
    return this.authService.sendAuthCode(sendAuthCodeDto);
  }

  @Post('login')
  login(@Body() userDto: AuthUserDto) {
    return this.authService.login(userDto);
  }
}
