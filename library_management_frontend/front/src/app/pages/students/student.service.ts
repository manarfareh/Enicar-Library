import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student } from './student';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class StudentsService {
  private apiServerUrl = 'http://localhost:8081';

  constructor(private http: HttpClient){}

  public getStudent(): Observable<Student[]> {
    const endpointUrls = [
      `${this.apiServerUrl}/students/all`
    ];

    const observables = endpointUrls.map(url => this.http.get<Student[]>(url));

    return forkJoin(observables).pipe(
      map(responses => responses.reduce((acc, curr) => [...acc, ...curr], []))
    );
  }
}
