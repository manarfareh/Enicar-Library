import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { HomeAdminRoutes } from './home-admin.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeAdminRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
  ]
})

export class HomeAdminModule {}