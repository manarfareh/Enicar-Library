import { Routes } from '@angular/router';
import { BorrowedBooksComponent } from 'src/app/pages/borrowed-books/borrowed-books.component';
import { BorrowingRequestsComponent } from 'src/app/pages/borrowing-requests/borrowing-requests.component';
import { StaffComponent } from 'src/app/pages/staff/staff.component';
import { StudentsComponent } from 'src/app/pages/students/students.component';

import {DigitalCollectionsComponent } from '../../pages/digital-collections/digital-collections.component';
import {PhysicalCollectionsComponent } from '../../pages/physical-collections/physical-collections.component';

export const HomeAdminRoutes: Routes = [
    
    { path: 'physical-collections',      component: PhysicalCollectionsComponent },
    { path: 'digital-collections',      component: DigitalCollectionsComponent },
    { path: 'borrowed-books',      component: BorrowedBooksComponent },
    { path: 'aborrowing-requests',      component: BorrowingRequestsComponent },
    { path: 'students',      component: StudentsComponent },
    { path: 'staff',      component: StaffComponent }
];
