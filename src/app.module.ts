import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './hero/hero.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/entities/user.entity';
import { Status } from './user/entities/status.entity';
import { Experience } from './user/entities/experience.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // Loads environment variables from .env
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Status, Experience], // Add your models here
      autoLoadModels: true,
      synchronize: true, // Automatically creates database tables based on your models
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Replace with a more secure key in production
      signOptions: { expiresIn: '60m' }, // Token expiration time
    }),
    AuthModule,
    UsersModule,
    UserModule,
    RoleModule,
  ],
  controllers: [AppController, HeroController, AuthController],
  providers: [AppService, UsersService, AuthService],
})
export class AppModule {}
