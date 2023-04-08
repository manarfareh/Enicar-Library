package tn.enicar.library_backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Models.Collections.Book;
import tn.enicar.library_backend.Models.Collections.Exam;
import tn.enicar.library_backend.Models.Collections.PfeBook;

import java.util.List;

public interface BookRepo extends JpaRepository<Book,Long> {
    @Query("SELECT b FROM Book b WHERE TYPE(b) = Article")
    List<Article> getAllArticles();

    @Query("SELECT b FROM Book b WHERE TYPE(b) = Exam")
    List<Exam> getAllExams();
    @Query("SELECT b FROM Book b WHERE TYPE(b) = PfeBook")
    List<PfeBook> getAllPfebooks();
}
