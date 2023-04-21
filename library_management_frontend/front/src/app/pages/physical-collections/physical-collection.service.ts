import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book } from './physical-collection';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PhysicalCollectionsService {
  private apiServerUrl = 'http://localhost:8081';

  constructor(private http: HttpClient){}

  public getbook(): Observable<Book[]> {
    const endpointUrls = [
      `${this.apiServerUrl}/Book/Physical-Article/all`,
      `${this.apiServerUrl}/Book/Physical-Exam/all`,
      `${this.apiServerUrl}/Book/Physical-Pfebook/all`
    ];

    const observables = endpointUrls.map(url => this.http.get<Book[]>(url));

    return forkJoin(observables).pipe(
      map(responses => responses.reduce((acc, curr) => [...acc, ...curr], []))
    );
  }

  public deleteBook(bookId: number): Observable<void> {
    const url = `${this.apiServerUrl}/Book/delete/${bookId}`;
    return this.http.delete<void>(url);
  }
}
