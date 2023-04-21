import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PhysicalCollectionsService } from './physical-collection.service';
import { Book } from './physical-collection';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-physical-collections',
  templateUrl: './physical-collections.component.html',
  styleUrls: ['./physical-collections.component.scss']
})
export class PhysicalCollectionsComponent implements OnInit {
  books: Book[];

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

}

