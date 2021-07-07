import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvailabilityDates } from '../availabilitydates';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-add-availability',
  templateUrl: './add-availability.component.html',
  styleUrls: ['./add-availability.component.css']
})
export class AddAvailabilityComponent implements OnInit {
   doctorId:number=0;
  doctor: Doctor= new Doctor();
  //doctors:any;
  availabilitydates:AvailabilityDates=new AvailabilityDates()
  constructor(private doctorService: DoctorService, private router: Router,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['doctorId'];
       this.doctorService.getDoctorById(this.doctorId).subscribe(data => {
         this.doctor = data; console.log(data);
       },
       error => console.log(error));
  }
 
  onSubmit() {
    this.saveDoctorAvailability();
  }
 
  saveDoctorAvailability(){
    this.availabilitydates.doctor=this.doctor;
    this.doctorService.createDoctorAvailabillity(this.availabilitydates).subscribe( data => {console.log(data);}, error => console.log(error));
    this.navigateToDoctors();
  }
 
  navigateToDoctors(){
    this.router.navigate(['/doctor']);
  }
}



