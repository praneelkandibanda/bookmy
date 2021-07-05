export class Patient implements IPatient{
    id: number= 0 ;
    patientName : string ="";
    mobileNo : number = 0 ;
    email : string = "";
    password : string ="";
    bloodGroup : string = "";
    gender : string = "";
    age : number =0;
    address : string = "";

}

export interface IPatient {
    id: number;
    patientName : string ;
    mobileNo : number ;
    email : string ;
    password : string ;
    bloodGroup : string ;
    gender : string ;
    age : number ;
    address : string ;
    
}
