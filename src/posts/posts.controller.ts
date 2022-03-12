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
import { FindPostDto } from './dto/find-post.dto';
import { PostModel } from './posts.model';

@Controller('posts')
export class PostsController {
  @Get()
  async getAll() {
    console.log('');
    return 'test';
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    console.log(id);
    return `test${id}`;
  }

  @Post()
  async create(@Body() dto: Omit<PostModel, '_id'>) {
    console.log(dto);
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
    console.log(id);
  }
}
