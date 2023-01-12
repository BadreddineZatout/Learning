import { ValidateCreateUserPipe } from './../../pipes/validate-create-user/validate-create-user.pipe';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CreateUserDto } from './../../dtos/createUser.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.fetchAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) user: CreateUserDto) {
    console.log(user);
    this.userService.create(user);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchById(id);
    if (!user)
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    return user;
  }
}
