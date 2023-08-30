import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { createtaskDto } from './dto/createtask.dto';
import { getbyid } from './dto/gettaskbyid.dto';
import { deletebyid } from './dto/deletetask.dto';
import { updatebyid } from './dto/updatetask.dto';
import { NotFoundError } from 'rxjs';
@Injectable()
export class TasksService {
    private tasks:Task[]=[];// creating interface object array
    getalldata(): Task[]
    {
        return this.tasks;
    }
    gettaskbyid(gettaskbyid:getbyid):Task
    {

        const {id} = gettaskbyid;
        const found = this.tasks.find(task => task.id === id);
        if(!found)
        {
            throw NotFoundError;
        }
        return found;
        //return this.tasks.find(task => task.id === id);

    }
    deletetaskbyid(deletetask:deletebyid):void
    {   
        const {id} = deletetask;
        this.tasks = this.tasks.filter(task => task.id === id);
    }
    update(gettaskbyiddto:getbyid,updatetaskdto:updatebyid): Task
    {
        const {title,description} = updatetaskdto;
        const task = this.gettaskbyid(gettaskbyiddto);
        task.title = title;
        task.description = description;
        return task;
    }
    create(createtaskdto:createtaskDto): Task
    {
        const {title,description} = createtaskdto;
        // specifying the data types as interface object
        const task: Task = {
            id:uuidv4(),
            title,description
        }; // no need to give as title:title compiler automaticcally understands
        this.tasks.push(task);
        return task;
    }
}
