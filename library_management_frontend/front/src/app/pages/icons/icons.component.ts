import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { HttpErrorResponse } from '@angular/common/http';
import { IconsService } from './icons.service';

import { Router, Route, RouterModule } from '@angular/router';
declare global {
  interface JQuery {
    modal(options?: any): any;
  }
}
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  books: Book[];
book_type: any;
searchText: string;
  public copy: string;
  constructor(private iconsService: IconsService, private router: Router) {}

  ngOnInit() {
    this.getBooks();
  }
  private getBooks() {
    this.iconsService.getbook().subscribe(
      (response: Book[]) => {
        console.log(this.books)
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  loadBooks() {
    this.iconsService.getbook().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  borrowBook(bookId: number) {
         {
          // Book was successfully borrowed, show success message
          this.showMessage('You need to Login');
          this.router.navigate(['/login']);
        } 
      }
    ;
  
  showMessage(message: string) {
    alert(message);
  }
}
