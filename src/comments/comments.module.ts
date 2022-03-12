import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CommentModel } from './comments.model';
import { CommentsController } from './comments.controller';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CommentModel,
        schemaOptions: {
          collection: 'Comment',
        },
      },
    ]),
  ],
  controllers: [CommentsController],
})
export class CommentsModule {}
