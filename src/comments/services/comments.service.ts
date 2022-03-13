import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { CommentModel } from '../comments.model';
import { Types } from 'mongoose';

import { CreateCommentDto } from '../dto/create-comment.dto';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(CommentModel) private readonly model: ModelType<CommentModel>,
  ) {}
  async create(dto: CreateCommentDto): Promise<DocumentType<CommentModel>> {
    return this.model.create(dto);
  }

  async delete(id: string): Promise<DocumentType<CommentModel> | null> {
    return this.model.findByIdAndDelete(id).exec();
  }

  async findById(id: string): Promise<DocumentType<CommentModel>[]> {
    return this.model.find({ postId: new Types.ObjectId(id) }).exec();
  }

  async findAll(): Promise<DocumentType<CommentModel>[]> {
    return this.model.find().exec();
  }

  async patch(
    id: string,
    dto: CreateCommentDto,
  ): Promise<DocumentType<CommentModel>[]> {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }
}
