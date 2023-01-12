import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(value.age)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException('Invalide Data', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: parseAgeToInt };
  }
}
