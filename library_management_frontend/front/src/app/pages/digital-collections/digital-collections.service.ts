import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book } from './digital-collections';

@Injectable({providedIn: 'root'})
export class DigitalCollectionsService {
  private apiServerUrl = 'http://localhost:8081';

  constructor(private http: HttpClient){}

  public getbook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiServerUrl}/Book/Article/all`);
  }

}