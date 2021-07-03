import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseURL = 'http://localhost:8082/Doctors/';
 
  constructor(private httpClient: HttpClient) {}
 
  getDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}` + '/getlist');
  }
  createDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/save', doctor);
  }
  getDoctorById(doctorId: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseURL}` + `/getById/${doctorId}`);
  }
 
  updateDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + `/update`, doctor);
  }
  deleteDoctor(doctorId: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/deleteDoctorById/${doctorId}`);
  }
  viewDoctorById(doctorId: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseURL}` + `/getdoctorById/${doctorId}`);
  }
}
