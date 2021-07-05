import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { HttpClient } from '@angular/common/http';
import { AvailabilityDates } from './availabilitydates';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseURL = 'http://localhost:8083/Doctors/';
 
  constructor(private httpClient: HttpClient) {}
 
  getDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}` + '/fetchAllDoctor');
  }
  createDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/saveDoctor', doctor);
  }
  getDoctorById(doctorId: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseURL}` + `/fetchDoctors/${doctorId}`);
  }
  createDoctorAvailabillity(availabilitydates: AvailabilityDates): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/savethedates', availabilitydates);
  }
 
  updateDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + `/updateDoctor`, doctor);
  }
  deleteDoctor(doctorId: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/deleteDoctor/${doctorId}`);
  }
  viewDoctorById(doctorId: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseURL}` + `/fetchDoctors/${doctorId}`);
  }
}
