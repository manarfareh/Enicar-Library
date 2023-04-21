import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl ="http://localhost:8082/api/v1/";
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private jwtToken: string;

  

  constructor(private http: HttpClient,private apiService:ApiService) {
    const token = localStorage.getItem('currentUser');
    this._isLoggedIn$.next(!!token);

  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}auth/authenticate`, { email, password });
  }

  login2(email: string, password: string){
    return this.apiService.login(email,password).pipe(
      tap((response : any) => {
        this.jwtToken = response.access_token;
        console.log(response);
        this._isLoggedIn$.next(true);
        localStorage.setItem('currentUser', response.access_token);

      })
    )
  }
  logout() {
    this._isLoggedIn$.next(false);

    localStorage.removeItem('currentUser');
  }
  isLogged(){
    this._isLoggedIn$.next(true);


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




