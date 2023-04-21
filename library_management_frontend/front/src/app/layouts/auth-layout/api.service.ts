import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl ="http://localhost:8082/api/v1/";

  constructor(private http :HttpClient) { }

  login( email :String ,password :String){
    return this.http.post('auth/authenticate',{email,password})
  }}

  // hatha yetfassa5 KOOOOOL