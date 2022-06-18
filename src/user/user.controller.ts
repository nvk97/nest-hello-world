import { Controller, Get, Param } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userResolver: UserResolver,
  ) {}
  @Get()
  async findAll(): Promise<UserEntity[]> {
    return await this.userResolver.findAll();
  }
  @Get(':id')
  async getUserById(@Param() params): Promise<any> {
    return await this.userService.findById(params.id);
  }
}
