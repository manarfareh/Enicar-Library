import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DigitalCollectionsService } from './digital-collections.service';
import { Book } from './digital-collections';
import * as $ from 'jquery';
declare global {
  interface JQuery {
    modal(options?: any): any;
  }
}
@Component({
  selector: 'app-digital-collections',
  templateUrl: './digital-collections.component.html',
  styleUrls: ['./digital-collections.component.scss']
})
export class DigitalCollectionsComponent {
  books: Book[];

  constructor(private digitalCollectionsService: DigitalCollectionsService) {}

  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    this.digitalCollectionsService.getbook().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  loadBooks() {
    this.digitalCollectionsService.getbook().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
  deleteBook(id: number) {
    this.digitalCollectionsService.deleteBook(id)
      .subscribe(() => {
        console.log(`Book with ID ${id} deleted successfully.`);
        this.loadBooks();
      }, error => {
        console.error(`Error deleting book with ID ${id}: `, error);
      });
  }

  saveChanges(book: Book) {
    const bookIndex = this.books.findIndex(b => b.id === book.id);
    if (bookIndex >= 0) {
      // Update the corresponding book object with the modified properties
      this.books[bookIndex] = book;
  
      // Hide the modal after saving changes
      const modalId = '#modifyBookModal' + bookIndex;
      $(modalId).modal('hide');
  
      // Send the updated book data to the server
      this.digitalCollectionsService.updateBook(book.id, book).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
