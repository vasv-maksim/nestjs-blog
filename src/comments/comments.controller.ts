import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

import { NOT_FOUND_COMMENT } from './comments.constant';
import { CommentModel } from './comments.model';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'all comments list',
    type: [CommentModel],
  })
  async getAll() {
    return this.commentsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'get comment by id',
    type: CommentModel,
  })
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.commentsService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 201,
    description: 'create comment',
    type: CommentModel,
  })
  @Post()
  @ApiBody({ type: CreateCommentDto })
  async create(@Body() dto: CreateCommentDto) {
    this.commentsService.create(dto);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'update comment',
    type: CommentModel,
  })
  @ApiBody({ type: CreateCommentDto })
  async patch(@Param('id') id: string, @Body() dto: CreateCommentDto) {
    const patched = this.commentsService.patch(id, dto);
    if (!patched) {
      throw new HttpException(NOT_FOUND_COMMENT, HttpStatus.NOT_FOUND);
    }
    return patched;
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'delete comment',
    type: CommentModel,
  })
  async delete(@Param('id') id: string) {
    const deleted = await this.commentsService.delete(id);
    if (!deleted) {
      throw new HttpException(NOT_FOUND_COMMENT, HttpStatus.NOT_FOUND);
    }
    return deleted;
  }
}
