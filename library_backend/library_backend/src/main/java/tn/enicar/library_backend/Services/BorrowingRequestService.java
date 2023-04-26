package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Models.Collections.BorrowingRequest;
import tn.enicar.library_backend.Repositories.BorrowingRequestRepo;

import java.util.Collections;
import java.util.List;

@Service
public class BorrowingRequestService {
    public static BorrowingRequestRepo borrowingRequestRepo = null;
    public static BorrowingRequestRepo borrowingbequestRepo ;

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
