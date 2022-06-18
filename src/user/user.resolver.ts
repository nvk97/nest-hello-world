import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from '@app/user/dto/create-user.input';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => [UserEntity])
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }
  @Mutation(() => UserEntity)
  createUser(
    @Args('CreateUserInput') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return this.userService.createUser(createUserInput);
  }
  @Query(() => UserEntity)
  findById(@Args('id') id: number): Promise<UserEntity> {
    return this.userService.findById(id);
  }
}
