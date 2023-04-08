package tn.enicar.library_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Models.Collections.Exam;
import tn.enicar.library_backend.Models.Collections.PfeBook;
import tn.enicar.library_backend.Services.BookService;

import java.util.List;

@RestController
@RequestMapping("/Book")
public class BookResource {
    @Autowired
    private BookService bookService;
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/Article/all")
    public ResponseEntity<List<Article>> getAllArticle(){
        List<Article> articleList=bookService.getAllArticles();
        return new ResponseEntity<>(articleList, HttpStatus.OK);
    }

    @GetMapping("/Exam/all")
    public ResponseEntity<List<Exam>> getAllExams(){
        List<Exam> examsList=bookService.getAllExams();
        return new ResponseEntity<>(examsList, HttpStatus.OK);
    }

    @GetMapping("/Pfebook/all")
    public ResponseEntity<List<PfeBook>> getAllPfebooks(){
        List<PfeBook> pfeBooksList=bookService.getAllPfebooks();
        return new ResponseEntity<>(pfeBooksList, HttpStatus.OK);
    }
}
