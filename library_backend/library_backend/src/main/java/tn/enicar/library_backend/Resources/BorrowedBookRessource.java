package tn.enicar.library_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.enicar.library_backend.Models.Collections.BorrowedBook;
import tn.enicar.library_backend.Services.BorrowedBookService;

import java.util.List;

@RestController
@RequestMapping("/BorrowedBook")
public class BorrowedBookRessource {
    @Autowired
    private BorrowedBookService borrowedbookService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/all")
    public ResponseEntity<List<BorrowedBook>> getAllBorrowedBook(){
        List<BorrowedBook> borrowedBooksList= BorrowedBookService.getAllBorrowedBook();
        return new ResponseEntity<>(borrowedBooksList, HttpStatus.OK);
    }
}
