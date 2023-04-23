package tn.enicar.library_backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.enicar.library_backend.Models.Collections.BorrowedBook;
import tn.enicar.library_backend.Models.Collections.BorrowingRequest;

public interface BorrowingRequestRepo extends JpaRepository<BorrowingRequest,Long> {
}
