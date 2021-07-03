import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {

  doctorId: number = 0;
  doctor: Doctor = new Doctor();
  constructor(private route: ActivatedRoute, private doctorService: DoctorService) { }
 
  ngOnInit(): void {
 
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.doctorService.getDoctorById(this.doctorId).subscribe(data => {
      this.doctor= data; console.log(data);
    },
    );
  }
}
