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
  @prop({ unique: true })
  name: string;

  @prop()
  isBanned: boolean;

  @prop()
  isAdult: boolean;

  @prop({ enum: Role })
  role: Role;
}
