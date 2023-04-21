import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BorrowedBooksService  } from './borrowed-books.service';
import { Book } from './borrowed-books';
@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.scss']
})
export class BorrowedBooksComponent implements OnInit {

  books: Book[];

  constructor(private BorrowedBooksService: BorrowedBooksService) { }

  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    this.BorrowedBooksService.getbook().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
