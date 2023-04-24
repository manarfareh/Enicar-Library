import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, tap } from 'rxjs';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
    console.log("ani interceptor ne5dem");
    console.log(this.authService.refreshToken());
   }

  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.includes('/myprofile')) {

    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      tap(
        () => {},
        error => {
          if (error.status === 403) {
            // Token has expired, try to refresh it
            this.authService.refreshToken().subscribe(
              newToken => {
                // Save the new token in local storage
                this.authService.saveToken(newToken);
              },
              error => {
                // Unable to refresh token, log the user out
                this.authService.logout();
              }
            );
          }
           
        }
      )
    );
  }
}

  
}
