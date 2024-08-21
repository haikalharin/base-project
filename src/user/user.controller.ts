import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../users/users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: Partial<User>): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
