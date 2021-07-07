import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

 doctors: Doctor[] | undefined;
  //doctors:any;
  constructor(private doctorService: DoctorService, private router: Router) { }

  
  
  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors() {
    this.doctorService.getDoctorList().subscribe(data => { this.doctors = data, console.log(data)});
  }

  updateDoctor(doctorId: number){
    this.router.navigate(['/update-doctor',doctorId]);
  }
  deleteDoctor(doctorId: number){
    this.doctorService.deleteDoctor(doctorId).subscribe(data => {
      console.log(data),
      this.getDoctors();
     },error => console.log(console.error))
    
  }
  viewDoctorById(doctorId: number) {
    this.doctorService.getDoctorById(doctorId).subscribe(data => {
      console.log(data), this.getDoctors();
      this.router.navigate(['/doctor-details',doctorId]);
    },)
  }
 
 


}
