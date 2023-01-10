import { CreateUserDto } from './../../dtos/createUser.dto';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query() query?: { sortBy?: string }) {
    return {
      name: 'hello users',
      ...query,
    };
  }

  @Get('posts')
  getPosts(): string[] {
    return ['post1', 'post2'];
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    console.log(user);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return { id };
  }
}
