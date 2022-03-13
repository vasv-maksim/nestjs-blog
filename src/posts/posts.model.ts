import { ApiProperty } from '@nestjs/swagger';
import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { UserModel } from 'src/users/users.model';

export interface PostModel extends Base {}
export class PostModel extends TimeStamps {
  @ApiProperty()
  @prop()
  name: string;

  @ApiProperty()
  @prop()
  text: string;

  @ApiProperty()
  @prop()
  rating: number;

  @ApiProperty()
  @prop({ type: () => [String] })
  tags?: string[];

  @ApiProperty()
  @prop()
  isAdult: boolean;

  @ApiProperty()
  @prop({ ref: () => UserModel })
  user: Ref<UserModel>;
}
