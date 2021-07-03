import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Admin implements IAdmin {
    id : number =0;
    adminName: string ="";
    contactNumber : number = 0;
    email : string ="";
    password : string = "";
    patients :Patient[] =[];
    doctors : Doctor[] = [];
}

export interface IAdmin{
    id : number ;
    adminName: string ;
    contactNumber : number ;
    email : string ;
    password : string ;
    patients :Patient[] ;
    doctors : Doctor[] ;

}
