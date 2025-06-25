import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() userData: Partial<User>) {
    return this.usersService.create(userData);
  }

  @Post('login')
  async login(@Body() data: { correo: string; password: string }) {
    const user = await this.usersService.login(data.correo, data.password);
    if (user) {
      return { message: 'Login successful', user };
    }
    return { message: 'Invalid credentials' };
  }

  @Get()
  async getAll() {
    return this.usersService.findAll();
  }
}
