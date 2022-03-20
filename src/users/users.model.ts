import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum Role {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user',
  Anonymous = 'anonymous',
}

export interface UserModel extends Base {}
export class UserModel extends TimeStamps {
  @ApiProperty()
  @prop({ unique: true })
  name: string;

  @ApiProperty()
  @prop()
  isBanned: boolean;

  @ApiProperty()
  @prop()
  isAdult: boolean;

  @ApiProperty()
  @prop({ enum: Role })
  role: Role;
}
