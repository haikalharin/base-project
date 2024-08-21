import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { Status } from './entities/status.entity';
import { Experience } from './entities/experience.entity';

@Module({
  imports: [SequelizeModule.forFeature([User, Status, Experience])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
