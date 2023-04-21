package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Models.Collections.Book;
import tn.enicar.library_backend.Models.Collections.Exam;
import tn.enicar.library_backend.Models.Collections.PfeBook;
import tn.enicar.library_backend.Repositories.BookRepo;

import java.util.List;
import java.util.Optional;

@Service

public class BookService {
    public static BookRepo bookRepo = null;
    @Autowired
    public BookService(BookRepo bookRepo){
        this.bookRepo=bookRepo;
    }

    public static List<Article> getAllDigitalArticles(){

        return bookRepo.getAllDigitalArticles();
    }

    public static List<Exam> getAllDigitalExams(){

        return bookRepo.getAllDigitalExams();
    }

    public static List<PfeBook> getAllDigitalPfebooks(){

        return bookRepo.getAllDigitalPfebooks();
    }
    public static List<Article> getAllPhysicalArticles(){

        return bookRepo.getAllPhysicalArticles();
    }

    public static List<Exam> getAllPhysicalExams(){

        return bookRepo.getAllPhysicalExams();
    }

    public static List<PfeBook> getAllPhysicalPfebooks(){

        return bookRepo.getAllPhysicalPfebooks();
    }

    public static List<Book> getAllBorrowedbooks(){

        return bookRepo.getAllBorrowedbooks();
    }
    public static void deleteById(Long id){

         bookRepo.deleteById(id);
    }

    public static Optional<Book> findById(Long id){

        bookRepo.findById(id);
        return null;
    }

    public static Book save(Book book){

        bookRepo.save(book);
        return book;
    }

}
