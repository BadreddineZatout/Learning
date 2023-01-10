import { ParseBoolPipe, ParseIntPipe } from '@nestjs/common/pipes';
import { CreateUserDto } from './../../dtos/createUser.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc?: boolean) {
    return {
      name: 'hello users',
      sortDesc,
    };
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() user: CreateUserDto) {
    console.log(user);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
