import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
export class CreatePostDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsNumber()
  rating: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  tags?: string[];

  @ApiProperty()
  @IsBoolean()
  isAdult: boolean;

  @ApiProperty()
  @IsString()
  user: string;
}
