import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Role } from 'src/users/users.model';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsBoolean()
  isBanned: boolean;

  @IsBoolean()
  isAdult: boolean;

  @IsEnum(Role)
  role: Role;
}
