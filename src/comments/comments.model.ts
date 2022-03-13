import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { PostModel } from 'src/posts/posts.model';
import { UserModel } from 'src/users/users.model';

export interface CommentModel extends Base {}
export class CommentModel extends TimeStamps {
  @prop()
  text: string;

  @prop({ ref: () => UserModel })
  user: Ref<UserModel>;

  @prop({ ref: () => PostModel })
  post: Ref<PostModel>;

  @prop()
  rating: number;
}
