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
  // loginProcess()
  // {
  //   if(this.formGroup.valid){
  //     this.authService.login(this.formGroup.value).subscribe(result =>{
  //       if(result.success){
  //         console.log(result);
  //         alert(result.message);
  //       }else{
  //         alert(result.message);
  //         console.log(result);

  //       }
  //     } )
  //   }
  // }
  // login(email: string, password: string) {
  //   this.loading = true;
  //   this.authService.login(email, password)
  //     .subscribe(
  //       data => {
  //         localStorage.setItem('currentUser', JSON.stringify(data));
  //         this.router.navigate(['/home']);
  //       },
  //       error => {
  //         this.error = error;
  //         this.loading = false;
  //       });
  // }

  submitForm(){
    this.authService.login(this.email,this.password).subscribe(result =>{
            if(!!result.email){
              console.log("result");

              console.log(result);
              this.authService.isLogged();
              localStorage.setItem('currentUser', result.access_token);
              this.router.navigate(['/home']);
            }else{
              console.log(result);
              alert("8alett");
              

            }
          } )

  }
  // submitForm2(){
  //   // if (this.formGroup.invalid) {
  //   //   return;
  //   // }

  //   this.authService
  //     .login2(this.formGroup.get('email')?.value, this.formGroup.get('password')?.value)
  //     .subscribe((response) => {
  //       this.router.navigate(['/home']);
  //     });
  // }
 
  }
  


