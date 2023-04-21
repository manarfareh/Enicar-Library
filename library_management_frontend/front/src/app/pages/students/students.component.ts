import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentsService } from './student.service';
import { Student } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }

  private getStudents() {
    this.studentsService.getStudent().subscribe(
      (response: Student[]) => {
        this.students = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
