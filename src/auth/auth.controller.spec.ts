import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            signIn: jest.fn(), // Mock the signIn method
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('signIn', () => {
    it('should return a token if signIn is successful', async () => {
      const result = { accessToken: 'testToken' };
      const signInDto = { username: 'testuser', password: 'testpass' };

      jest.spyOn(authService, 'signIn').mockResolvedValue(result);

      expect(await authController.login(signInDto)).toBe(result);
      expect(authService.signIn).toHaveBeenCalledWith('testuser', 'testpass');
    });

    it('should return an error if signIn fails', async () => {
      const signInDto = { username: 'wronguser', password: 'wrongpass' };

      jest.spyOn(authService, 'signIn').mockImplementation(() => {
        throw new Error('Invalid credentials');
      });

      try {
        await authController.login(signInDto);
      } catch (error) {
        expect(error.message).toBe('Invalid credentials');
      }
    });
  });
});
