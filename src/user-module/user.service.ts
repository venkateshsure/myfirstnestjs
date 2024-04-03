import { Injectable } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
    //public users: User[];
    public users: User[] = [];

  getUsers(): User[]{ 
    return this.users
  } 

  getUser(email:string):User[]{
    const singleUser=this.users.filter(i=>i.email===email)
    return singleUser
  }

  addUser(user:User): User{
        this.users.push(user)
        return user
  }
  deleteUser(email:string):User[]{
    const remainingUsers= this.users.filter(i=>i.email!==email)
    this.users=remainingUsers
    return remainingUsers
  }
}
