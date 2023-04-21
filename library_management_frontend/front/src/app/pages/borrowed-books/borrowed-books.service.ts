import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book } from './borrowed-books';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BorrowedBooksService {
  private apiServerUrl = 'http://localhost:8081';

  constructor(private http: HttpClient){}

  public getbook(): Observable<Book[]> {
    const endpointUrls = [
      `${this.apiServerUrl}/Book/Borrowed`,
     // `${this.apiServerUrl}/Book/Digital-Exam/all`,
     // `${this.apiServerUrl}/Book/Digital-Pfebook/all`
    ];

    const observables = endpointUrls.map(url => this.http.get<Book[]>(url));

    return forkJoin(observables).pipe(
      map(responses => responses.reduce((acc, curr) => [...acc, ...curr], []))
    );
  }
}
