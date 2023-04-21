import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Staff } from './staff';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class StaffsService {
  private apiServerUrl = 'http://localhost:8081';

  constructor(private http: HttpClient){}

  public getStaff(): Observable<Staff[]> {
    const endpointUrls = [
      `${this.apiServerUrl}/staff/all`
    ];

    const observables = endpointUrls.map(url => this.http.get<Staff[]>(url));

    return forkJoin(observables).pipe(
      map(responses => responses.reduce((acc, curr) => [...acc, ...curr], []))
    );
  }
}
