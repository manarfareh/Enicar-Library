import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl ="http://localhost:8081/";



  constructor(private http :HttpClient) { 
    

  }


  getUserData() :Observable<Student> {
    const token = localStorage.getItem('currentUser');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<Student>(`${this.baseUrl}students/myprofile`,httpOptions);

  }
  sendStudentId(){

    this.http.post('http://localhost:8082/students/mycollections', this.getUserData().subscribe((r) =>{r.id})).subscribe((response: any) => {
    console.log(response);
  });
  }

  









}

  // hatha yetfassa5 KOOOOOL$