import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async createUser(data: Partial<User>): Promise<User> {
    return this.userModel.create(data);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }
  //
  // findAll() {
  //   return `This action returns all user`;
  // }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
