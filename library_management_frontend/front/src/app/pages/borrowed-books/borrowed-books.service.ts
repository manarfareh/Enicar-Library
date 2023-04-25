import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BorrowedBook } from './borrowed-books';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class BorrowedBooksService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient){}

  public getbook(): Observable<BorrowedBook[]> {
    const endpointUrls = [
      `${this.apiServerUrl}/BorrowedBook/all`,
     // `${this.apiServerUrl}/Book/Digital-Exam/all`,
     // `${this.apiServerUrl}/Book/Digital-Pfebook/all`
    ];

    const observables = endpointUrls.map(url => this.http.get<BorrowedBook[]>(url));

    return forkJoin(observables).pipe(
      map(responses => responses.reduce((acc, curr) => [...acc, ...curr], []))
    );
  }


  getUserData() :Observable<BorrowedBook[]> {
    const token = localStorage.getItem('currentUser');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<BorrowedBook[]>(`${this.apiServerUrl}/students/myprofile`,httpOptions);

  }
}
