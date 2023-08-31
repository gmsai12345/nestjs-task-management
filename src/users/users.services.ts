
import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { v4 as uuidv4 } from 'uuid';
import { createUser } from './dto/createuser.dto';
import { getuserbyid } from './dto/getuserbyid.dto';
import { deletuserebyid } from './dto/deletebyid.dto';
import { updatebyid } from './dto/updatebyid.dto';
import { NotFoundError } from 'rxjs';
@Injectable()
export class UsersService {
    private users:User[]=[];// creating interface object array
    getalldata(): User[]
    {
        return this.users;
    }
    gettaskbyid(getbyid:getuserbyid):User
    {

        const {id} = getbyid;
        const found = this.users.find(user => user.id === id);
        if(!found)
        {
            throw NotFoundError;
        }
        return found;
        //return this.tasks.find(task => task.id === id);
    }
    deletetaskbyid(deletebyid:deletuserebyid):void
    {   
        const {id} = deletebyid;
        this.users = this.users.filter(user => user.id === id);
    }
    update(getbyid:getuserbyid,updatedto:updatebyid): User
    {
        const {name,emailId} = updatedto;
        const user = this.gettaskbyid(getbyid);
        user.name = name;
        user.emailId = emailId;
        return user;
    }
    create(createuser:createUser): User
    {
        const {name,emailId} = createuser;
        // specifying the data types as interface object
        const user: User = {
            id:uuidv4(),
            name,emailId
        }; // no need to give as title:title compiler automaticcally understands
        this.users.push(user);
        return user;
    }
}
