import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentsService } from './student.service';
import { Role, Student } from './student';
import {  NgForm,FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  aClass:any;
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

  addStudent(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const dob = form.value.dob;
    const phoneNumber = form.value.phoneNumber;
    const aClass = form.value.aClass;
    const password = form.value.password;
    const imageUrl = form.value.imageUrl;
    const Role = form.value.Role;

    const student: Student = {
      name: name,
      email: email,
      dob: dob,
      phoneNumber: phoneNumber,
      aClass: aClass,
      password: password,
      imageUrl: imageUrl,
      role:Role
    };

    this.studentsService.addStudent(student).subscribe(() => {
      // do something after student is added
    });
  }



  }

