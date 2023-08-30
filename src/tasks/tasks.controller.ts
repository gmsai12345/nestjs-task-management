import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes,ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { createtaskDto } from './dto/createtask.dto';
import { getbyid } from './dto/gettaskbyid.dto';
import { deletebyid } from './dto/deletetask.dto';
import { updatebyid } from './dto/updatetask.dto';
@Controller('tasks')
export class TasksController {
    constructor(private taskservice:TasksService) {}
    
    @Get()
    getalldata():Task[] // SAME reffering the interface object as return type
    {
        return this.taskservice.getalldata();
    }
    @Get('/:id')
    getbyid(@Param() gettaskbyiddto:getbyid):Task
    {
        return this.taskservice.gettaskbyid(gettaskbyiddto);
    }
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createtaskdto:createtaskDto):Task
    {

        return this.taskservice.create(createtaskdto);// giving parameter as title and description to be passed on to the below functions
    }
    @Delete('/:id')
    delete(@Param() deletetaskdto:deletebyid): string
    {
        this.taskservice.deletetaskbyid(deletetaskdto);
        return "deleted";
    }
    @Put()
    update(@Body() gettaskbyiddto:getbyid,@Body() updatetaskdto:updatebyid):Task
    {
        return this.taskservice.update(gettaskbyiddto,updatetaskdto);
    }
    
}
