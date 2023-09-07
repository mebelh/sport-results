import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from 'jwt/jwt.service';
import { UserEntity } from 'user/user.entity';
import { UserService } from 'user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const authHeader = req.headers.authorization;
      const token = authHeader.split(' ')[1];

      if (!token) {
        throw '';
      }

      const userWithJwt = this.jwtService.decodeToken<UserEntity>(token);

      const user = await this.userService.getUserByPhone(userWithJwt.phone);

      req.user = {
        ...userWithJwt,
        ...user,
      };

      return true;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      });
    }
  }
}
