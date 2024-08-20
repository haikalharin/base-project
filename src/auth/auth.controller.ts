import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ResponseUtil } from '../utils/response.util';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() signInDto: Record<string, any>) {
    const userData = await this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );

    if (!userData) {
      return ResponseUtil.error('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return ResponseUtil.success({
      userId: userData.userId,
      username: userData.username,
      token: userData.token,
    });
  }

  @Get('create')
  create(@Res({ passthrough: true }) response) {
    response.cookie('name', 'tobi');
    return 'hero create';
  }
}
