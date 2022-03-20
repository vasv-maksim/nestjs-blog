import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';

import { UserModel } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel) private readonly model: ModelType<UserModel>,
  ) {}
  async create(dto: CreateUserDto): Promise<DocumentType<UserModel>> {
    return this.model.create(dto);
  }

  async delete(id: string): Promise<DocumentType<UserModel> | null> {
    return this.model.findByIdAndDelete(id).exec();
  }

  async findById(id: string): Promise<DocumentType<UserModel>[]> {
    return this.model.find({ postId: new Types.ObjectId(id) }).exec();
  }

  async findAll(): Promise<DocumentType<UserModel>[]> {
    return this.model.find().exec();
  }

  async patch(
    id: string,
    dto: CreateUserDto,
  ): Promise<DocumentType<UserModel>[]> {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }
}
