import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BorrowingRequest,Book } from './borrowingrequest';
import {  forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import {BorrowedBook } from '../borrowed-books/borrowed-books';
@Injectable({providedIn: 'root'})
export class BorrowingRequestService {
  private apiServerUrl = 'http://localhost:8081';

  constructor(private http: HttpClient){}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getBorrowingRequest(): Observable<BorrowingRequest[]> {
    const endpointUrls = [
      `${this.apiServerUrl}/BorrowingRequest/all`,
    ];

    const observables = endpointUrls.map(url => this.http.get<BorrowingRequest[]>(url));

    return forkJoin(observables).pipe(
      map(responses => responses.reduce((acc, curr) => [...acc, ...curr], []))
    );
  }
  private handleError(error: any) {
    console.error(error);
    return throwError('An error occurred. Please try again later.');
  }
  public deleteBorrowingRequest(borbookId: number): Observable<void> {
    const url = `${this.apiServerUrl}/BorrowingRequest/delete/${borbookId}`;
    return this.http.delete<void>(url);
  }
  public addBorrowedBook(borrowingrequest:BorrowingRequest): Observable<BorrowedBook>{
    const borrowedbook: BorrowedBook = {
      id:null,
      student: borrowingrequest.student,
      book: borrowingrequest.book,
      book_id: borrowingrequest.book.id,
      student_id: borrowingrequest.student.id,
      borrow_date:new Date( Date.now()),
      return_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    };
    const url = `${this.apiServerUrl}/BorrowedBook/add`;
    console.log(borrowedbook);
    return this.http.post<BorrowedBook>(url, borrowedbook, this.httpOptions)
    .pipe(
      retry(3), // Retry up to 3 times if the request fails
      catchError(this.handleError) // Handle any errors that occur
    );
  }
  public acceptRequest(borrowingrequest:BorrowingRequest): Observable<Book>{
    const url = `${this.apiServerUrl}/Book/update/${borrowingrequest.book.id}`;
    this.addBorrowedBook(borrowingrequest);
    console.log(borrowingrequest);
    this.deleteBorrowingRequest(borrowingrequest.id);
   
    const message = `Your borrowing request for '${borrowingrequest.book.title}' has been accepted`;
     return this.http.put<Book>(url, borrowingrequest.book, this.httpOptions)
     .pipe(
       retry(3), // Retry up to 3 times if the request fails
       catchError(this.handleError) // Handle any errors that occur
     );
  }

//B8FB7D56B3D9848AC699F23DF72040E1B3F92F8FD2EEE038AD6B6C14FD6EBD9BF1E8D94EC6E78D108F2D10552AF79B3D
 

}
