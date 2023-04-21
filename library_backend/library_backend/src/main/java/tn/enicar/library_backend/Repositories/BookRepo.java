package tn.enicar.library_backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Models.Collections.Book;
import tn.enicar.library_backend.Models.Collections.Exam;
import tn.enicar.library_backend.Models.Collections.PfeBook;

import java.util.List;

public interface BookRepo extends JpaRepository<Book,Long> {

    @Query("SELECT b FROM Book b WHERE TYPE(b) = Article and b.IsDigit=1")
    List<Article> getAllDigitalArticles();

    @Query("SELECT b FROM Book b WHERE TYPE(b) = Exam and b.IsDigit=1")
    List<Exam> getAllDigitalExams();
    @Query("SELECT b FROM Book b WHERE TYPE(b) = PfeBook and b.IsDigit=1")
    List<PfeBook> getAllDigitalPfebooks();
    @Query("SELECT b FROM Book b WHERE TYPE(b) = Article and b.IsDigit=0")
    List<Article> getAllPhysicalArticles();

    @Query("SELECT b FROM Book b WHERE TYPE(b) = Exam and b.IsDigit=0")
    List<Exam> getAllPhysicalExams();
    @Query("SELECT b FROM Book b WHERE TYPE(b) = PfeBook and b.IsDigit=0")
    List<PfeBook> getAllPhysicalPfebooks();

    @Query("SELECT b FROM Book b WHERE b.isAvailable=0")
    List<Book> getAllBorrowedbooks();
}
