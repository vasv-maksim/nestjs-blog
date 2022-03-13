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

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './services/users.service';
import { NOT_FOUND_USER } from './users.constant';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: CreateUserDto) {
    this.usersService.create(dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() id: string) {
    const post = this.usersService.findById(id);
    if (!post) {
      throw new HttpException(NOT_FOUND_USER, HttpStatus.NOT_FOUND);
    }
    return post;
  }

  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CreateUserDto) {
    const patchedPost = this.usersService.patch(id, dto);
    if (!patchedPost) {
      throw new HttpException(NOT_FOUND_USER, HttpStatus.NOT_FOUND);
    }
    return patchedPost;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedPost = await this.usersService.delete(id);
    if (!deletedPost) {
      throw new HttpException(NOT_FOUND_USER, HttpStatus.NOT_FOUND);
    }
    return deletedPost;
  }
}
