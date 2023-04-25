package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Models.Collections.Book;
import tn.enicar.library_backend.Models.Collections.BorrowingRequest;
import tn.enicar.library_backend.Repositories.BookRepo;
import tn.enicar.library_backend.Repositories.BorrowingRequestRepo;

import java.util.Collections;
import java.util.List;

@Service
public class BorrowingRequestService {
    public static BorrowingRequestRepo borrowingbequestRepo ;

    @Autowired
    public BorrowingRequestService(BookRepo bookRepo){
        this.borrowingbequestRepo=borrowingbequestRepo;
    }

    public static List<BorrowingRequest> getAllBorrowingRequest(){

        return borrowingbequestRepo.findAll();
    }

    public  List<BorrowingRequest> findAllBorrowingRequestById(Long id){
        return  borrowingbequestRepo.findAllById(Collections.singleton(id));
    }

}
