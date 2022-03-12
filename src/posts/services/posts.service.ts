import { Inject, Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostModel } from '../posts.model';
import { Types } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @Inject(PostModel) private readonly postModel: ModelType<PostModel>,
  ) {}

  async create(dto: CreatePostDto): Promise<DocumentType<PostModel>> {
    return this.postModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<PostModel> | null> {
    return this.postModel.findByIdAndDelete(id).exec();
  }

  async findById(postId: string): Promise<DocumentType<PostModel>[]> {
    return this.postModel.find({ postId: new Types.ObjectId(postId) }).exec();
  }
}
