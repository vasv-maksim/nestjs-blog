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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { NOT_FOUND_POST } from './posts.constant';
import { PostModel } from './posts.model';
import { PostsService } from './posts.service';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'all posts list',
    type: [PostModel],
  })
  async getAll() {
    return this.postsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'post by id',
    type: PostModel,
  })
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.postsService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 201,
    description: 'created post',
    type: PostModel,
  })
  @Post()
  async create(@Body() dto: CreatePostDto) {
    this.postsService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 200,
    description: 'updated post',
    type: PostModel,
  })
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CreatePostDto) {
    const patchedPost = this.postsService.patch(id, dto);
    if (!patchedPost) {
      throw new HttpException(NOT_FOUND_POST, HttpStatus.NOT_FOUND);
    }
    return patchedPost;
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'deleted post',
    type: PostModel,
  })
  async delete(@Param('id') id: string) {
    const deletedPost = await this.postsService.delete(id);
    if (!deletedPost) {
      throw new HttpException(NOT_FOUND_POST, HttpStatus.NOT_FOUND);
    }
    return deletedPost;
  }
}
