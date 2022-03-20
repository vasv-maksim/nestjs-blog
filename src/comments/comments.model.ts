import { ApiProperty } from '@nestjs/swagger';
import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { PostModel } from 'src/posts/posts.model';
import { UserModel } from 'src/users/users.model';

export interface CommentModel extends Base {}
export class CommentModel extends TimeStamps {
  @ApiProperty()
  @prop()
  text: string;

  @ApiProperty({ type: String })
  @prop({ ref: () => UserModel })
  userId: Ref<UserModel>;

  @ApiProperty({ type: String })
  @prop({ ref: () => PostModel })
  postId: Ref<PostModel>;

  @ApiProperty()
  @prop()
  rating: number;
}
