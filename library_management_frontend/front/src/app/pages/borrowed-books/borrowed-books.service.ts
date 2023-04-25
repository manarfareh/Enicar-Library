import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {BorrowedBook } from './borrowed-books';
import {  forkJoin } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BorrowedBooksService {
  private apiServerUrl = 'http://localhost:8081';

  constructor(private http: HttpClient){}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

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
  private handleError(error: any) {
    console.error(error);
    return throwError('An error occurred. Please try again later.');
  }
  public deleteBook(bookId: number): Observable<void> {
    const url = `${this.apiServerUrl}/BorrowedBook/delete/${bookId}`;
    return this.http.delete<void>(url);
  }

  updateBook(book: BorrowedBook): Observable<BorrowedBook> {
    const url = `${this.apiServerUrl}/BorrowedBook/update/${book.id}`;
    return this.http.put<BorrowedBook>(url, book, this.httpOptions)
      .pipe(
        retry(3), // Retry up to 3 times if the request fails
        catchError(this.handleError) // Handle any errors that occur
      );
  }
}
