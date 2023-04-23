import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PhysicalCollectionsService } from './physical-collection.service';
import { Book } from './physical-collection';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {  NgForm } from '@angular/forms';
@Component({
  selector: 'app-physical-collections',
  templateUrl: './physical-collections.component.html',
  styleUrls: ['./physical-collections.component.scss']
})
export class PhysicalCollectionsComponent implements OnInit {
  books: Book[];
  book_type: any;
  searchText: string;
  constructor(private PhysicalCollectionsService: PhysicalCollectionsService,public dialog: MatDialog) { }
  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    this.PhysicalCollectionsService.getbook().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  loadBooks() {
    this.PhysicalCollectionsService.getbook().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
  deleteBook(id: number) {
    this.PhysicalCollectionsService.deleteBook(id)
      .subscribe(() => {
        console.log(`Book with ID ${id} deleted successfully.`);
        this.loadBooks();
      }, error => {
        console.error(`Error deleting book with ID ${id}: `, error);
      });
  }

  saveChanges(book: Book) {
    this.PhysicalCollectionsService.updateBook(book).subscribe(() => {
      // Do something when the book is updated successfully
    }, (error) => {
      // Handle error
    });
  }

  addBook(form: NgForm) {
    const title = form.value.title;
     const book_type = form.value.book_type;
    const author = form.value.author;
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
      publicationYear:publicationYear,
      language:language ,
      pageCount:pageCount,
      description: description,
      isAvailable: isAvailable,
      aClass:aClass,
      subject:subject
    };
    this.PhysicalCollectionsService.addBook(book).subscribe(() => {
      // do something after book is added
    });
  }

}

