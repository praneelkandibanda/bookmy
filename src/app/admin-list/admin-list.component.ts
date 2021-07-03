import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  //admins: Admin[] = [];
  admins : any;

  constructor(private admin : AdminService) { }

  ngOnInit(): void {


    this.admin.getAdminList().subscribe(data => this.admins = data);

  }

}