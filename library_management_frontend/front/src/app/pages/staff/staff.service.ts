import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Staff } from './staff';
import {  forkJoin } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class StaffsService {
  private apiServerUrl = 'http://localhost:8081';

  constructor(private http: HttpClient){}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public deleteStaff(staffId: number): Observable<void> {
    const url = `${this.apiServerUrl}/Staff/delete/${staffId}`;
    return this.http.delete<void>(url);
  }

  public getStaff(): Observable<Staff[]> {
    const endpointUrls = [
      `${this.apiServerUrl}/staff/all`
    ];

    const observables = endpointUrls.map(url => this.http.get<Staff[]>(url));

    return forkJoin(observables).pipe(
      map(responses => responses.reduce((acc, curr) => [...acc, ...curr], []))
    );
  }

  
  addStaff(staff: Staff): Observable<any> {
    console.log('Student object:', staff);
    return this.http.post(`${this.apiServerUrl}/staff/add`, staff);
  }

  updateStaff(staff: Staff): Observable<Staff> {
    const url = `${this.apiServerUrl}/staff/update/${staff.id}`;
    return this.http.put<Staff>(url, staff, this.httpOptions)
      .pipe(
        retry(3), // Retry up to 3 times if the request fails
        catchError(this.handleError) // Handle any errors that occur
      );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError('An error occurred. Please try again later.');
  }
}
