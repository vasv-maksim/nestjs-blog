import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsBoolean()
  isBanned: boolean;

  @ApiProperty()
  @IsBoolean()
  isAdult: boolean;

  @ApiProperty()
  @IsEnum(Role)
  role: Role;
}
