import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.email === 'manar@gmail.com' && this.password === 'manar123') {
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
