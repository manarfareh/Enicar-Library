package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Models.Collections.BorrowingRequest;
import tn.enicar.library_backend.Repositories.BorrowingRequestRepo;

import java.util.List;

@Service
public class BorrowingRequestService {
    public static BorrowingRequestRepo borrowingRequestRepo = null;
    @Autowired
    public BorrowingRequestService(BorrowingRequestRepo borrowingRequestRepo){
        this.borrowingRequestRepo=borrowingRequestRepo;
    }

    public static List<BorrowingRequest> getAllBorrowingRequest(){

        return borrowingRequestRepo.getAllBorrowingRequests();

    }
}
