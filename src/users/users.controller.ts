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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { NOT_FOUND_USER } from './users.constant';
import { UserModel } from './users.model';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all users',
    type: [UserModel],
  })
  async getAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'get user by id',
    type: UserModel,
  })
  async getOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @ApiResponse({
    status: 201,
    description: 'create user',
    type: UserModel,
  })
  async create(@Body() dto: CreateUserDto) {
    this.usersService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 200,
    description: 'update user',
    type: UserModel,
  })
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CreateUserDto) {
    const patchedPost = this.usersService.patch(id, dto);
    if (!patchedPost) {
      throw new HttpException(NOT_FOUND_USER, HttpStatus.NOT_FOUND);
    }
    return patchedPost;
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'delete user',
    type: UserModel,
  })
  async delete(@Param('id') id: string) {
    const deletedPost = await this.usersService.delete(id);
    if (!deletedPost) {
      throw new HttpException(NOT_FOUND_USER, HttpStatus.NOT_FOUND);
    }
    return deletedPost;
  }
}
