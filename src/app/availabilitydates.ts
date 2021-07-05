import { Doctor } from "./doctor";

export class AvailabilityDates {

    availabilityId :number | undefined
    doctor:Doctor[]=[];
    fromdate :Date=new Date();
    enddate:Date=new Date();


}
