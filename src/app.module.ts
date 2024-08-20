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

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Replace with a more secure key in production
      signOptions: { expiresIn: '60m' }, // Token expiration time
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, HeroController, AuthController],
  providers: [AppService, UsersService, AuthService],
})
export class AppModule {}
