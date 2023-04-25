import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeAdminComponent } from './layouts/home-admin/home-admin.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { ListBookComponent } from './pages/listbook/listbook.component';
import { IsLoggedInGuard } from './layouts/auth-layout/is-logged-in.guard';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: "login", component: LoginComponent },
  { path: "listbook", component: ListBookComponent },
  {
    path: 'login-admin',
    component: LoginAdminComponent,
  },
  {
    path: 'home1',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: HomeAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/home-admin/home-admin.module').then(m => m.HomeAdminModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: '',
    component:AuthLayoutComponent ,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
  
  {
    path: '**',
    redirectTo: 'home'
  }
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
