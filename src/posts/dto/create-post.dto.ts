import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreatePostDto {
  @IsString()
  name: string;

  @IsString()
  text: string;

  @IsNumber()
  rating: number;

  @IsOptional()
  @IsArray()
  tags?: string[];

  @IsString()
  isAdult: boolean;

  @IsString()
  user: string;
}
