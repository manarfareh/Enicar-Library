import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { StaffsService } from './staff.service';
import { Staff } from './staff';
import {  NgForm,FormsModule  } from '@angular/forms';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  staffs: Staff[];

  constructor(private staffsService: StaffsService) { }

  ngOnInit() {
    this.getStaffs();
  }

  private getStaffs() {
    this.staffsService.getStaff().subscribe(
      (response: Staff[]) => {
        this.staffs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  addStaff(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const dob = form.value.dob;
    const phoneNumber = form.value.phoneNumber;
    const password = form.value.password;
    const imageUrl = form.value.imageUrl;
    const Role = form.value.Role;

    const staff: Staff = {
      id:null,
      name: name,
      email: email,
      dob: dob,
      phoneNumber: phoneNumber,
      password: password,
      imageUrl: imageUrl,
      Role:Role
    };

    this.staffsService.addStaff(staff).subscribe(() => {
      // do something after student is added
    });
  }
  loadStaffs() {
    this.staffsService.getStaff().subscribe((staffs: Staff[]) => {
      this.staffs = staffs;
    });
  }

  deleteStaff(id: number) {
    this.staffsService.deleteStaff(id)
      .subscribe(() => {
        console.log(`staff with ID ${id} deleted successfully.`);
        this.loadStaffs();
      }, error => {
        console.error(`Error deleting staff with ID ${id}: `, error);
      });
  }


  saveChanges(staff: Staff) {
    this.staffsService.updateStaff(staff).subscribe(() => {
      // Do something when the book is updated successfully
    }, (error) => {
      // Handle error
    });
  }


  }

