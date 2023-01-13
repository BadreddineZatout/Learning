import { User } from './../../../entities/User';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUser } from './../../../interfaces/users.interface';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  fetchAll() {
    return this.userRepository.find();
  }

  create(user: CreateUser) {
    const newUser = this.userRepository.create({
      ...user,
      created_at: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  fetchById(id: number) {}
}
