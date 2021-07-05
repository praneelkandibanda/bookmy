import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvailabilityDates } from '../availabilitydates';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-add-availability',
  templateUrl: './add-availability.component.html',
  styleUrls: ['./add-availability.component.css']
})
export class AddAvailabilityComponent implements OnInit {

  //doctor: Doctor= new Doctor();
  doctors:any;
  availabilitydates:AvailabilityDates=new AvailabilityDates()
  constructor(private doctorService: DoctorService, private router: Router) { }
 
  ngOnInit(): void {
  }
 
  onSubmit() {
    this.saveDoctorAvailability();
  }
 
  saveDoctorAvailability(){
    this.doctorService.createDoctorAvailabillity(this. availabilitydates).subscribe( data => {console.log(data);}, error => console.log(error));
    this.navigateToDoctors();
  }
 
  navigateToDoctors(){
    this.router.navigate(['/doctor']);
  }
}



