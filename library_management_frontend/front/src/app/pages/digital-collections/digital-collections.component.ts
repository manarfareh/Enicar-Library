import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {  NgForm,FormsModule  } from '@angular/forms';
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
book_type: any;
searchText: string;

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
    this.digitalCollectionsService.updateBook(book).subscribe(() => {
      // Do something when the book is updated successfully
    }, (error) => {
      // Handle error
    });
  }
  
  addBook(form: NgForm) {
    const title = form.value.title;
     const book_type = form.value.book_type;
    const author = form.value.author;
    const isDigit = form.value.isDigit;
    const url = form.value.url ;
    const publicationYear = form.value.publicationYear;
    const language = form.value.language;
    const pageCount = form.value.pageCount;
    const description = form.value.description;
    const isAvailable = form.value.isAvailable;
    const aClass = form.value.aClass;
    const subject = form.value.subject;
    const book: Book = {
     id: null,
      book_type:book_type,
      title:title ,
      author: author,
      isDigit: isDigit, // 0 if physical, 1 if digital
      url:url , // if it's a digital book, it has a URL
      publicationYear:publicationYear,
      language:language ,
      pageCount:pageCount,
      description: description,
      isAvailable: isAvailable,
      aClass:aClass,
      subject:subject
    };
    this.digitalCollectionsService.addBook(book).subscribe(() => {
      // do something after book is added
    });
  }
 
}
