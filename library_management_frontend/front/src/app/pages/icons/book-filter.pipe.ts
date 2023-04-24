import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter2'
})
export class BookFilterPipe2 implements PipeTransform {
  transform(books: any[], searchText: string): any[] {
    if (!books) return [];
    if (!searchText) return books;
    searchText = searchText.toLowerCase();
    return books.filter(book => {
      return book.title.toLowerCase().includes(searchText) ||
             book.author.toLowerCase().includes(searchText);
    });
  }
}