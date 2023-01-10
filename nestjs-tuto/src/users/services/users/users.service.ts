import { CreateUser } from './../../../interfaces/users.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'hello users',
      email: 'hello@users.ts',
    },
  ];

  fetchAll() {
    return this.fakeUsers;
  }

  create(user: CreateUser) {
    this.fakeUsers.push(user);
    return;
  }

  fetchById(id: number) {
    return { id, username: 'badi', email: 'badi@test.dz' };
  }
}
