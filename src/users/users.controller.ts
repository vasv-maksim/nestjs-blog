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
import { FindUserDto } from './dto/user-comment.dto';
import { UserModel } from './users.model';

@Controller('users')
export class UsersController {
  @Get()
  async getAll() {
    console.log('');
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    console.log(id);
  }

  @Post()
  async create(@Body() dto: Omit<UserModel, '_id'>) {
    console.log(dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindUserDto) {
    console.log(dto);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: UserModel) {
    console.log(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id);
  }
}
