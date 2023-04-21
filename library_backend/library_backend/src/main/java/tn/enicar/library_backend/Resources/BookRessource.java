package tn.enicar.library_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Models.Collections.Book;
import tn.enicar.library_backend.Models.Collections.Exam;
import tn.enicar.library_backend.Models.Collections.PfeBook;
import tn.enicar.library_backend.Services.BookService;

import java.util.List;
import java.util.Optional;

import static tn.enicar.library_backend.Services.BookService.bookRepo;

@RestController
@RequestMapping("/Book")
public class BookRessource {
    @Autowired
    private BookService bookService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/Digital-Article/all")
    public ResponseEntity<List<Article>> getAllDigitalArticle(){
        List<Article> articleList=bookService.getAllDigitalArticles();
        return new ResponseEntity<>(articleList, HttpStatus.OK);
    }

    @GetMapping("/Digital-Exam/all")
    public ResponseEntity<List<Exam>> getAllDigitalExams(){
        List<Exam> examsList=bookService.getAllDigitalExams();
        return new ResponseEntity<>(examsList, HttpStatus.OK);
    }

    @GetMapping("/Digital-Pfebook/all")
    public ResponseEntity<List<PfeBook>> getAllDigitalPfebooks(){
        List<PfeBook> pfeBooksList=bookService.getAllDigitalPfebooks();
        return new ResponseEntity<>(pfeBooksList, HttpStatus.OK);
    }
    @GetMapping("/Physical-Article/all")
    public ResponseEntity<List<Article>> getAllPhysicalArticle(){
        List<Article> articleList=bookService.getAllPhysicalArticles();
        return new ResponseEntity<>(articleList, HttpStatus.OK);
    }

    @GetMapping("/Physical-Exam/all")
    public ResponseEntity<List<Exam>> getAllPhysicalExams(){
        List<Exam> examsList=bookService.getAllPhysicalExams();
        return new ResponseEntity<>(examsList, HttpStatus.OK);
    }

    @GetMapping("/Physical-Pfebook/all")
    public ResponseEntity<List<PfeBook>> getAllPhysicalPfebooks(){
        List<PfeBook> pfeBooksList=bookService.getAllPhysicalPfebooks();
        return new ResponseEntity<>(pfeBooksList, HttpStatus.OK);
    }

    @GetMapping("/Borrowed")
    public ResponseEntity<List<Book>> getAllBorrowedbooks(){
        List<Book> BooksList=bookService.getAllBorrowedbooks();
        return new ResponseEntity<>(BooksList, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable("id") Long id) {
        bookService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") Long id, @RequestBody Book newBook) {
        Optional<Book> optionalBook = bookService.findById(id);

        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setTitle(newBook.getTitle());
            book.setAuthor(newBook.getAuthor());
            book.setPublicationYear(newBook.getPublicationYear());
            book.setDescription(newBook.getDescription());
            book.setIsAvailable(newBook.getIsAvailable());
            book.setIsDigit(newBook.getIsDigit());
            book.setLanguage(newBook.getLanguage());
            book.setPageCount(newBook.getPageCount());
            book.setUrl(newBook.getUrl());

            Book updatedBook = bookService.save(book);
            return ResponseEntity.ok(updatedBook);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
