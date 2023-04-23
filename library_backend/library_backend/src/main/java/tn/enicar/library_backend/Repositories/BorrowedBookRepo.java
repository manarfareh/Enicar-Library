package tn.enicar.library_backend.Repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.enicar.library_backend.Models.Collections.BorrowedBook;

import java.util.List;

public interface BorrowedBookRepo extends JpaRepository<BorrowedBook,Long> {
    @Query("SELECT bb FROM BorrowedBook bb JOIN FETCH bb.book JOIN FETCH bb.student")
    List<BorrowedBook> getAllBorrowedBooks();

}
