import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { NOT_FOUND_COMMENT } from './comments.constant';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsService } from './services/comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  @Get()
  async getAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.commentsService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: CreateCommentDto) {
    this.commentsService.create(dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() id: string) {
    const finded = this.commentsService.findById(id);
    if (!finded) {
      throw new HttpException(NOT_FOUND_COMMENT, HttpStatus.NOT_FOUND);
    }
    return finded;
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CreateCommentDto) {
    const patched = this.commentsService.patch(id, dto);
    if (!patched) {
      throw new HttpException(NOT_FOUND_COMMENT, HttpStatus.NOT_FOUND);
    }
    return patched;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleted = await this.commentsService.delete(id);
    if (!deleted) {
      throw new HttpException(NOT_FOUND_COMMENT, HttpStatus.NOT_FOUND);
    }
    return deleted;
  }
}
