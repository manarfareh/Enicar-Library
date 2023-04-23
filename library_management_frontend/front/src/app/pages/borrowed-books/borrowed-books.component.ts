import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BorrowedBooksService  } from './borrowed-books.service';
import { BorrowedBook } from './borrowed-books';
@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.scss']
})
export class BorrowedBooksComponent implements OnInit {

  borrowedbooks: BorrowedBook[];

  constructor(private BorrowedBooksService: BorrowedBooksService) { }

  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    this.BorrowedBooksService.getbook().subscribe(
      (response: BorrowedBook[]) => {
        this.borrowedbooks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
