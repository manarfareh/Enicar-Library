package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Models.Collections.Exam;
import tn.enicar.library_backend.Models.Collections.PfeBook;
import tn.enicar.library_backend.Repository.BookRepo;

import java.util.List;

@Service

public class BookService {
    private static BookRepo bookRepo = null;
    @Autowired
    public BookService(BookRepo bookRepo){
        this.bookRepo=bookRepo;
    }
    public static List<Article> getAllArticles(){

        return bookRepo.getAllArticles();
    }

    public static List<Exam> getAllExams(){

        return bookRepo.getAllExams();
    }

    public static List<PfeBook> getAllPfebooks(){

        return bookRepo.getAllPfebooks();
    }
}
