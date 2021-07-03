import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

 
    doctorId: number =0;
    doctor: Doctor= new Doctor();
   
    constructor(private doctorService: DoctorService, private route: ActivatedRoute, private router: Router) { }
   
    ngOnInit(): void {
       this.doctorId = this.route.snapshot.params['doctorId'];
       this.doctorService.getDoctorById(this.doctorId).subscribe(data => {
         this.doctor = data; console.log(data);
       },
       error => console.log(error));
    }
   
    onSubmit(){
      this.doctorService.updateDoctor(this.doctor).subscribe(data => {
        this.navigateToDoctors();
      }, error => console.log(error));
    }
   
    navigateToDoctors(){
      this.router.navigate(['/Doctors']);
    }

}
