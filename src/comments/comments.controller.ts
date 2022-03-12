import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentModel } from './comments.model';
import { FindCommentDto } from './dto/find-comment.dto';

@Controller('comments')
export class CommentsController {
  @Get()
  async getAll() {
    console.log('');
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    console.log(id);
  }

  @Post()
  async create(@Body() dto: Omit<CommentModel, '_id'>) {
    console.log(dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindCommentDto) {
    console.log(dto);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CommentModel) {
    console.log(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id);
  }
}
