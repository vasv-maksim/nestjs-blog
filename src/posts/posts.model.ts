import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
//import { UserModel } from 'src/users/users.model';

export interface PostModel extends Base {}
export class PostModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  text: string;

  @prop()
  rating: number;

  @prop({ type: () => [String] })
  tags?: string[];

  @prop()
  isAdult: boolean;

  // @prop({ ref: () => UserModel })
  // user: Ref<UserModel>;
}
