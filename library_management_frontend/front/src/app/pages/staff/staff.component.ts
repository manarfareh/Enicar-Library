import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { StaffsService } from './staff.service';
import { Staff } from './staff';
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
}
