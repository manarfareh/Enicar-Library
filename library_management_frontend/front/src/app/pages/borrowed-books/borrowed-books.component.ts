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

  
  saveChanges(book: BorrowedBook) {
    this.BorrowedBooksService.updateBook(book).subscribe(() => {
      // Do something when the book is updated successfully
    }, (error) => {
      // Handle error
    });
  }
  loadBooks() {
    this.BorrowedBooksService.getbook().subscribe((borrowedbooks: BorrowedBook[]) => {
      this.borrowedbooks = borrowedbooks;
    });
  }
  deleteBook(id: number) {
    this.BorrowedBooksService.deleteBook(id)
      .subscribe(() => {
        console.log(`Book with ID ${id} deleted successfully.`);
        this.loadBooks();
      }, error => {
        console.error(`Error deleting book with ID ${id}: `, error);
      });
  }
}
