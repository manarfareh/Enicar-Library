import { Router } from '@angular/router';
import { AuthLayoutModule } from './../../layouts/auth-layout/auth-layout.module';
import { AuthLayoutRoutes } from './../../layouts/auth-layout/auth-layout.routing';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/layouts/auth-layout/auth.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  loading = false;
  error = '';
  formGroup : FormGroup;
  email: string;
  password: string;

  constructor(private authService : AuthService, private router :  Router) {}

  ngOnInit() {
    this.initForm();
  }
  ngOnDestroy() {
  }

  initForm(){
    this.formGroup = new FormGroup(
      {
        email : new FormControl('',Validators.required),
        password : new FormControl('',Validators.required)

      }
    )
  }

  submitForm(){
    this.authService.login(this.email,this.password).subscribe(result =>{
            if(!!result.email){
              console.log("result");

              console.log(result);
              this.authService.isLogged();
              localStorage.setItem('currentUser', result.access_token);
              this.router.navigate(['/profile']);
            }else{
              console.log(result);
              this.error = 'Invalid email or password';
              console.error(this.error);
              alert("8alett");
              

            }
          } )

  }

 
  }
  


