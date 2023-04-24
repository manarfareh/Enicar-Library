import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { HttpErrorResponse } from '@angular/common/http';
import { ListBookService } from './listbook.service';

import { Router, Route, RouterModule } from '@angular/router';
declare global {
  interface JQuery {
    modal(options?: any): any;
  }
}
@Component({
  selector: 'app-icons',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.scss']
})
export class ListBookComponent implements OnInit {
  books: Book[];
book_type: any;
searchText: string;
  public copy: string;
  constructor(private listbookService: ListBookService, private router: Router) {}

  ngOnInit() {
    this.getBooks();
  }
  private getBooks() {
    this.listbookService.getbook().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  loadBooks() {
    this.listbookService.getbook().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

 
borrowBook(bookId: number) {
  this.listbookService.borrowBook(bookId)
    .then((result) => {
      if (result) {
        // Book was successfully borrowed, show success message
        this.showMessage('Book borrowed successfully');
        // Redirect to login page
        this.router.navigate(['/login']);
      } else {
        // Book is not available, show error message
        this.showMessage('error');
      }
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
}
  
  showMessage(message: string) {
    alert(message);
  }
}
