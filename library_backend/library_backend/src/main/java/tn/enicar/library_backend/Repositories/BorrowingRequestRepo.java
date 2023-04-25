package tn.enicar.library_backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.enicar.library_backend.Models.Collections.BorrowingRequest;

import java.util.List;

public interface BorrowingRequestRepo extends JpaRepository<BorrowingRequest,Long> {
    @Query("SELECT br FROM BorrowingRequest br JOIN FETCH br.book JOIN FETCH br.student")
    List<BorrowingRequest> getAllBorrowingRequests();
}
