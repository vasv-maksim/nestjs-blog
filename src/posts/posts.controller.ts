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
import { CreatePostDto } from './dto/create-post.dto';
import { NOT_FOUND_POST } from './posts.constant';
import { PostsService } from './services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  async getAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.postsService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: CreatePostDto) {
    this.postsService.create(dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() id: string) {
    const post = this.postsService.findById(id);
    if (!post) {
      throw new HttpException(NOT_FOUND_POST, HttpStatus.NOT_FOUND);
    }
    return post;
  }

  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CreatePostDto) {
    const patchedPost = this.postsService.patch(id, dto);
    if (!patchedPost) {
      throw new HttpException(NOT_FOUND_POST, HttpStatus.NOT_FOUND);
    }
    return patchedPost;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedPost = await this.postsService.delete(id);
    if (!deletedPost) {
      throw new HttpException(NOT_FOUND_POST, HttpStatus.NOT_FOUND);
    }
    return deletedPost;
  }
}
