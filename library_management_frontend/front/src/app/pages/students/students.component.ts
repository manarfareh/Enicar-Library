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
      id: null,
      name: name,
      email: email,
      dob: dob,
      phoneNumber: phoneNumber,
      aClass: aClass,
      password: password,
      imageUrl: imageUrl,
      Role:Role
    };

    this.studentsService.addStudent(student).subscribe(() => {
      // do something after student is added
    });
  }
  loadStudents() {
    this.studentsService.getStudent().subscribe((students: Student[]) => {
      this.students = students;
    });
  }

  deleteStudent(id: number) {
    this.studentsService.deleteStudent(id)
      .subscribe(() => {
        console.log(`student with ID ${id} deleted successfully.`);
        this.loadStudents();
      }, error => {
        console.error(`Error deleting student with ID ${id}: `, error);
      });
  }


  saveChanges(student: Student) {
    this.studentsService.updateStudent(student).subscribe(() => {
      // Do something when the book is updated successfully
    }, (error) => {
      // Handle error
    });
  }


  }

