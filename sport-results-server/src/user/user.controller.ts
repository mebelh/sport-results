import { Body, Controller, Get, Req } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser(@Req() req: any) {
    console.log(req.user);
  }
}
