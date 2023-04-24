package tn.enicar.library_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.enicar.library_backend.Models.Collections.BorrowedBook;
import tn.enicar.library_backend.Services.BorrowedBookService;

import java.util.List;
import java.util.Optional;

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
    @GetMapping("/find/{id}")
    public ResponseEntity<Optional<BorrowedBook>> findABorrowedBook(@PathVariable("id") long id){
        Optional<BorrowedBook> borrowedBook= BorrowedBookService.findById(id);
        return new ResponseEntity<>(borrowedBook, HttpStatus.OK);
    }
}
