package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Models.Actors.Staff;
import tn.enicar.library_backend.Models.Collections.BorrowedBook;
import tn.enicar.library_backend.Repositories.BorrowedBookRepo;

import java.util.List;
import java.util.Optional;

@Service
public class BorrowedBookService {
    public static BorrowedBookRepo borrowedbookRepo = null;
    @Autowired
    public BorrowedBookService(BorrowedBookRepo borrowedbookRepo){
        this.borrowedbookRepo=borrowedbookRepo;
    }

    public static List<BorrowedBook> getAllBorrowedBook(){

        return borrowedbookRepo.getAllBorrowedBooks();
        // return  borrowedbookRepo.findAll();

    }
    public static BorrowedBook addBorrowedBook(BorrowedBook borrowedbook)
    {
        return borrowedbookRepo.save(borrowedbook);
    }

    public static void deleteById(Long id){

        borrowedbookRepo.deleteById(id);
    }
    public static BorrowedBook save(BorrowedBook book){

        borrowedbookRepo.save(book);
        return book;
    }

    public static Optional<BorrowedBook> findById(Long id){

        return borrowedbookRepo.findById(id);
        // return  borrowedbookRepo.findAll();

    }
}
