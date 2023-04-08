import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DigitalCollectionsService } from './digital-collections.service';
import { Book } from './digital-collections';
@Component({
  selector: 'app-digital-collections',
  templateUrl: './digital-collections.component.html',
  styleUrls: ['./digital-collections.component.scss']
})
export class DigitalCollectionsComponent implements OnInit {
  books: Book[];

  constructor(private digitalCollectionsService: DigitalCollectionsService) { }

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
}
