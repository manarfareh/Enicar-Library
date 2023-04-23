import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BorrowedBook } from './borrowed-books';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BorrowedBooksService {
  private apiServerUrl = 'http://localhost:8081';

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
}
