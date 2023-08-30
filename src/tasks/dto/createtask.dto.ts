// this is used for encapsulating the data instead of
// writing as 3-4 times specifying for each request we give it here
import {IsNotEmpty} from 'class-validator';
export class createtaskDto
{
    @IsNotEmpty()
    title:string;
    @IsNotEmpty()
    description:string;
}