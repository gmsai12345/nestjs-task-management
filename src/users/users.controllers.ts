import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.services';
import { User } from './users.model';
import { getuserbyid } from './dto/getuserbyid.dto';
import { createUser } from './dto/createuser.dto';
import { deletuserebyid } from './dto/deletebyid.dto';
import { updatebyid } from './dto/updatebyid.dto';
@Controller('users')
export class UsersController {
//    constructor(private taskservice:TasksService) {}
    constructor(private userservice:UsersService) {}
    
    @Get() // get all users
    getalldata():User[] // SAME reffering the interface object as return type
    {
        return this.userservice.getalldata();
    }
    @Get('/:id')
    getbyid(@Param() getbyid:getuserbyid):User
    {
        return this.userservice.gettaskbyid(getbyid);
    }
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createuser:createUser):User
    {

        return this.userservice.create(createuser)// giving parameter as title and description to be passed on to the below functions
    }
    @Delete('/:id')
    delete(@Param() deletebyid:deletuserebyid): string
    {
        this.userservice.deletetaskbyid(deletebyid);
        return "deleted";
    }
    @Put()
    update(@Body() getbyid:getuserbyid,@Body() updateuser:updatebyid):User
    {
        return this.userservice.update(getbyid,updateuser);
    }
    
}
