import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    console.log(createUserDto);
    return await this.userService.createUser(createUserDto);
  }
  @Get(':id')
  async getUserById(@Param() params): Promise<any> {
    return await this.userService.findById(params.id);
  }
}
