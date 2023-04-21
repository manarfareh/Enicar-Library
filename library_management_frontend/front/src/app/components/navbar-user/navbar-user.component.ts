import { AuthService } from 'src/app/layouts/auth-layout/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Home',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/icons', title: 'Borrowing',  icon:'ni-planet text-blue', class: '' },
  { path: '/maps', title: 'Digital Collections',  icon:'ni-pin-3 text-orange', class: '' },
  { path: '/user-profile', title: 'Exams & TDs',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/tables', title: 'My reservationsbb',  icon:'ni-bullet-list-67 text-red', class: '' },
  { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.scss']
})
export class NavbarUserComponent implements OnInit {

  public focus;

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  logout() {
    this.authService.logout();
  }
}
