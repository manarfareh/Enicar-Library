import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';

const routes: Routes = [
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarAdminComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarAdminComponent
  ]
})
export class ComponentsModule { }
