import { Component, NgModule, OnInit } from '@angular/core';
import { Router, Route, RouterModule } from '@angular/router'; // import Router and Route from @angular/router
export const routes: Route[] = [
];

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})

export class SidebarAdminComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = routes.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
