import { Controller, Get, Post,Delete,Body ,Param} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[]{
    return this.userService.getUsers()
  }

  @Get('/:email')
  getUser(@Param('email') email:string):User[]{
    return this.userService.getUser(email)
  }

  @Post()
  postUser(@Body() user:User): User{
    return this.userService.addUser(user)
  }

  @Delete('/:email')
  deleteUser(@Param('email') email:string):User[]{
    return this.userService.deleteUser(email)
  }

}
