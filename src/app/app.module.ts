import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddAvailabilityComponent } from './add-availability/add-availability.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDoctorComponent,
    DoctorListComponent,
    UpdateDoctorComponent,
    ViewDoctorComponent,
    MainPageComponent,
    DoctorComponent,
    PatientComponent,
    AdminComponent,
    AdminListComponent,
    AddAdminComponent,
    AddAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
