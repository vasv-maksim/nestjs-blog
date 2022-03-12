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
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { FindPostDto } from './dto/find-post.dto';
import { NOT_FOUND_POST } from './posts.constant';
import { PostModel } from './posts.model';
import { PostsService } from './services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  async getAll() {
    console.log('');
    return 'test';
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return `test${id}`;
  }

  @Post()
  async create(@Body() dto: CreatePostDto) {
    console.log(dto);
    this.postsService.create(dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindPostDto) {
    console.log(dto);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: PostModel) {
    console.log(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedPost = await this.postsService.delete(id);
    if (!deletedPost) {
      throw new HttpException(NOT_FOUND_POST, HttpStatus.NOT_FOUND);
    }
  }
}
