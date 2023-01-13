import { CreateUserDto } from './../../dtos/createUser.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';

@Controller('users')
// @UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.fetchAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  // @Get(':id')
  // getUserById(@Param('id', ParseIntPipe) id: number) {
  //   const user = this.userService.fetchById(id);
  //   if (!user)
  //     throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
  //   return user;
  // }
}
