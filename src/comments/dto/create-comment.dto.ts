import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  text: string;

  @IsString()
  userId: string;

  @IsString()
  postId: string;

  @IsNumber()
  rating: number;
}
