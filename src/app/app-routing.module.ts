import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAvailabilityComponent } from './add-availability/add-availability.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminComponent } from './admin/admin.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PatientComponent } from './patient/patient.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { AvailabilityDates } from './availabilitydates';
const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'getDoctorList', component: DoctorListComponent },
 
  { path: 'create-doctor', component: CreateDoctorComponent },
  { path: 'add-availability/:doctorId', component: AddAvailabilityComponent },
 // { path: '', redirectTo: 'doctor', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'availabilitydates',component:AvailabilityDates},
  { path : 'getAdminList', component : AdminListComponent },
  { path: 'doctor-details/:doctorId', component: ViewDoctorComponent },
  { path: 'update-doctor/:doctorId', component: UpdateDoctorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
