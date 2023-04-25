package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
<<<<<<< HEAD
=======
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Models.Collections.Book;
>>>>>>> 25dec37b51a7978258e7050c3ab448e0a6f99d85
import tn.enicar.library_backend.Models.Collections.BorrowingRequest;
import tn.enicar.library_backend.Repositories.BorrowingRequestRepo;

import java.util.Collections;
import java.util.List;

@Service
public class BorrowingRequestService {
<<<<<<< HEAD
    public static BorrowingRequestRepo borrowingRequestRepo = null;
=======
    public static BorrowingRequestRepo borrowingbequestRepo ;

>>>>>>> 25dec37b51a7978258e7050c3ab448e0a6f99d85
    @Autowired
    public BorrowingRequestService(BorrowingRequestRepo borrowingRequestRepo){
        this.borrowingRequestRepo=borrowingRequestRepo;
    }

    public static List<BorrowingRequest> getAllBorrowingRequest(){

        return borrowingRequestRepo.getAllBorrowingRequests();

    }

    public  List<BorrowingRequest> findAllBorrowingRequestById(Long id){
        return  borrowingbequestRepo.findAllById(Collections.singleton(id));
    }

}
