import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Student } from './student';
import {  forkJoin } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class StudentsService {
  private apiServerUrl = 'http://localhost:8081';

  constructor(private http: HttpClient){}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public deleteStudent(studentId: number): Observable<void> {
    const url = `${this.apiServerUrl}/Students/delete/${studentId}`;
    return this.http.delete<void>(url);
  }

  public getStudent(): Observable<Student[]> {
    const endpointUrls = [
      `${this.apiServerUrl}/students/all`
    ];

    const observables = endpointUrls.map(url => this.http.get<Student[]>(url));

    return forkJoin(observables).pipe(
      map(responses => responses.reduce((acc, curr) => [...acc, ...curr], []))
    );
  }

  addStudent(student: Student): Observable<any> {
    console.log('Student object:', student);
    return this.http.post(`${this.apiServerUrl}/students/add`, student);
  }

  updateStudent(student: Student): Observable<Student> {
    const url = `${this.apiServerUrl}/students/update/${student.id}`;
    return this.http.put<Student>(url, student, this.httpOptions)
      .pipe(
        retry(3), // Retry up to 3 times if the request fails
        catchError(this.handleError) // Handle any errors that occur
      );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError('An error occurred. Please try again later.');
  }
}
