import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
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