package tn.enicar.library_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.enicar.library_backend.Models.Collections.Article;
import tn.enicar.library_backend.Models.Collections.BorrowingRequest;
import tn.enicar.library_backend.Services.BookService;
import tn.enicar.library_backend.Services.BorrowingRequestService;

import java.util.List;

@RestController
@RequestMapping("/BorrowingRequest")
public class BorrowingRequestRessource {
    @Autowired
    private BorrowingRequestService borrowingbequestservice;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/all")
    public ResponseEntity<List<BorrowingRequest>> getAllDigitalArticle(){
        List<BorrowingRequest> borrowingrequestList=borrowingbequestservice.getAllBorrowingRequest();
        return new ResponseEntity<>(borrowingrequestList, HttpStatus.OK);
    }
}
