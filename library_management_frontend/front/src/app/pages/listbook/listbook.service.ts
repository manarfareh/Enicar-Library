import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Book } from './book';
import {  forkJoin } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ListBookService {
  private apiServerUrl = 'http://localhost:8081';

  constructor(private http: HttpClient){}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getbook(): Observable<Book[]> {
    const endpointUrls = [
      `${this.apiServerUrl}/Book/Digital-Article/all`,
      `${this.apiServerUrl}/Book/Digital-Exam/all`,
      `${this.apiServerUrl}/Book/Digital-Pfebook/all`,
      `${this.apiServerUrl}/Book/Physical-Article/all`,
      `${this.apiServerUrl}/Book/Physical-Exam/all`,
      `${this.apiServerUrl}/Book/Physical-Pfebook/all`
    ];

    const observables = endpointUrls.map(url => this.http.get<Book[]>(url));

    return forkJoin(observables).pipe(
      map(responses => responses.reduce((acc, curr) => [...acc, ...curr], []))
    );
  }
  // Handle any errors that occur during HTTP requests
  private handleError(error: any) {
    console.error(error);
    return throwError('An error occurred. Please try again later.');
  }
  borrowBook(bookId: number) {
    const borrowUrl = `${this.apiServerUrl}/borrowingRequest/${bookId}`;

    return this.http.post(borrowUrl, {})
      .toPromise()
      .then(() => {
        console.log('Borrow request sent successfully.');
        return true;
      })
      .catch((error) => {
        console.error('Error sending borrow request:', error);
        return false;
      });
  }

}
