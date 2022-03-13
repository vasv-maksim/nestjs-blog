import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  login: string;

  @MinLength(6, { message: 'Password is too short' })
  @IsString()
  password: string;
}
