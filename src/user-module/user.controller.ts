import { Controller, Get, Post,Delete,Body ,Param, UsePipes, ValidationPipe} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, UserParamsDto } from './dto/user.dto';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[]{
    return this.userService.getUsers()
  }

  @Get('/:email')
  getUser(@Param() params:UserParamsDto):User[]{
    return this.userService.getUser(params.email)
  }

  @Post()
  @UsePipes(new ValidationPipe())
  postUser(@Body() user:UserDto): User{
    return this.userService.addUser(user)
  }

  @Delete('/:email')
  deleteUser(@Param() params:UserParamsDto):User[]{
    return this.userService.deleteUser(params.email)
  }

}
