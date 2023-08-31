// this is used for encapsulating the data instead of
// writing as 3-4 times specifying for each request we give it here
import {IsNotEmpty} from 'class-validator';
export class createUser
{
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    emailId:string;
}