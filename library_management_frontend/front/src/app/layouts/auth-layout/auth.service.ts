import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 
 
  private token: string;

  private baseUrl ="http://localhost:8082/api/v1/";
  
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient,private apiService:ApiService) {
    const token = localStorage.getItem('currentUser');
    this._isLoggedIn$.next(!!token);

  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}auth/authenticate`, { email, password });
  }

  // login2(email: string, password: string){
  //   return this.apiService.login(email,password).pipe(
  //     tap((response : any) => {
  //       this.jwtToken = response.access_token;
  //       console.log(response);
  //       this._isLoggedIn$.next(true);
  //       localStorage.setItem('currentUser', response.access_token);

  //     })
  //   )
  // }
  logout() {
    console.log("a7na fl logout")
    this._isLoggedIn$.next(false);
    localStorage.removeItem('currentUser');
  }
  isLogged(){
    this._isLoggedIn$.next(true);


  }
   // Function to refresh the JWT token
   refreshToken(): Observable<string> {
    const refreshToken = this.getRefreshToken();
    return this.http.post<string>('http://example.com/refresh-token', { refreshToken });
  }

  // Function to get the JWT token from local storage
  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  // Function to save the JWT token to local storage
  saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  // Function to remove the JWT token from local storage
  removeToken(): void {
    this.token = null;
    localStorage.removeItem('token');
  }

  // Function to get the refresh token from local storage
  getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  // Function to save the refresh token to local storage
  saveRefreshToken(refreshToken: string): void {
    localStorage.setItem('refreshToken', refreshToken);
  }

  // Function to remove the refresh token from local storage
  removeRefreshToken(): void {
    localStorage.removeItem('refreshToken');
  }
  // getJwtToken(): string {
  //   console.log("ani jwt token", this.jwtToken);
  //   return this.jwtToken;
  // }
 
}


// export class AuthService {
//   private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
//   isLoggedIn$ = this._isLoggedIn$.asObservable();

//   constructor(private apiService: ApiService) {
//     const token = localStorage.getItem('profanis_auth');
//     this._isLoggedIn$.next(!!token);}


// login(email: string, password: string){
//   console.log("I am server");
// return this.apiService.login(email, password).pipe(
//       tap((response: any) => {
//         this._isLoggedIn$.next(true);
//         localStorage.setItem(response.email, response.token);
//       })
//     );
  
// }
 
// }PROFANIS TUTO 




