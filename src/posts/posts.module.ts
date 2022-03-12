import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PostModel } from './posts.model';
import { PostsController } from './posts.controller';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: PostModel,
        schemaOptions: {
          collection: 'Post',
        },
      },
    ]),
  ],
  controllers: [PostsController],
})
export class PostsModule {}
