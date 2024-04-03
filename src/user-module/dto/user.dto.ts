
import { IsDefined, IsEmail, IsNotEmpty, IsString } from "class-validator";


export class UserDto{
    @IsString()
    @IsEmail()
    @IsDefined()
    email:string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    username:string;
}


export class UserParamsDto{
    @IsString()
    @IsEmail()
    @IsDefined()
    email:string;
}