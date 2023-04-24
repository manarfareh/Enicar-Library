import { AuthService } from 'src/app/layouts/auth-layout/auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/layouts/auth-layout/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  currentUser:Student ;

  constructor( private apiService : ApiService ) { 
    this.currentUser = new Student();

  }
  ngOnInit() {
    this.getUserData();
  }

  private getUserData(){
    this.apiService.getUserData().subscribe(
      (response) =>{
        this.currentUser = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }

  getAge(birthDate: Date): number {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    console.log(birthDateObj);

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  }
  
  


  


  

}


