import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookFilterPipe } from './pages/digital-collections/book-filter.pipe';
import { BookFilterPipe2 } from './pages/icons/book-filter.pipe';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { HomeAdminComponent } from './layouts/home-admin/home-admin.component';
import { PhysicalCollectionsComponent } from './pages/physical-collections/physical-collections.component';
import { DigitalCollectionsComponent } from './pages/digital-collections/digital-collections.component';
import { BorrowedBooksComponent } from './pages/borrowed-books/borrowed-books.component';
import { BorrowingRequestsComponent } from './pages/borrowing-requests/borrowing-requests.component';
import { StudentsComponent } from './pages/students/students.component';
import { StaffComponent } from './pages/staff/staff.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { ListBookComponent } from './pages/listbook/listbook.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    HomeAdminComponent,
    PhysicalCollectionsComponent,
    DigitalCollectionsComponent,
    BorrowedBooksComponent,
    BorrowingRequestsComponent,
    StudentsComponent,
    StaffComponent,
    LoginAdminComponent,
    HomepageComponent,
    BookFilterPipe,
    BookFilterPipe2,
    ListBookComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
