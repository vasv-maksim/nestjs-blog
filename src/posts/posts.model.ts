import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

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
}
