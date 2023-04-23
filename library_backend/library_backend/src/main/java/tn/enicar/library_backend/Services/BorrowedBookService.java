package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Models.Collections.BorrowedBook;
import tn.enicar.library_backend.Repositories.BorrowedBookRepo;

import java.util.List;

@Service
public class BorrowedBookService {
    public static BorrowedBookRepo borrowedbookRepo = null;
    @Autowired
    public BorrowedBookService(BorrowedBookRepo borrowedbookRepo){
        this.borrowedbookRepo=borrowedbookRepo;
    }

    public static List<BorrowedBook> getAllBorrowedBook(){

      // return borrowedbookRepo.getAllBorrowedBooks();
      return  borrowedbookRepo.findAll();
    }
}
