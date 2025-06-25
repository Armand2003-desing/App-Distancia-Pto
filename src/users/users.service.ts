import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userData: Partial<User>) {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async login(correo: string, password: string) {
    const user = await this.userRepository.findOneBy({ correo });
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async findAll() {
    return this.userRepository.find();
  }
}
