package tn.enicar.library_backend.Resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.enicar.library_backend.Models.Actors.Staff;
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

    @PostMapping("/add")
    public ResponseEntity<BorrowedBook> addBorrowedBook (@RequestBody BorrowedBook borrowedBook) {
        BorrowedBook newBorrowedBook = BorrowedBookService.addBorrowedBook(borrowedBook);
        return new ResponseEntity<>(newBorrowedBook, HttpStatus.CREATED);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Optional<BorrowedBook>> findABorrowedBook(@PathVariable("id") long id){
        Optional<BorrowedBook> borrowedBook= BorrowedBookService.findById(id);
        return new ResponseEntity<>(borrowedBook, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable("id") Long id) {
        BorrowedBookService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<BorrowedBook> updateBorrowedBook(@PathVariable("id") Long id, @RequestBody BorrowedBook newBorrowedBook) {
        System.out.println("Received request to update borrowed book with ID: " + id);

        Optional<BorrowedBook> optionalBorrowedBook = BorrowedBookService.findById(id);

        if (optionalBorrowedBook.isPresent()) {
            BorrowedBook borrowedBook = optionalBorrowedBook.get();
            borrowedBook.setBook(newBorrowedBook.getBook());
            borrowedBook.setStudent(newBorrowedBook.getStudent());
            borrowedBook.setBorrowDate(newBorrowedBook.getBorrowDate());
            borrowedBook.setReturnDate(newBorrowedBook.getReturnDate());

            BorrowedBook updatedBorrowedBook = BorrowedBookService.save(borrowedBook);
            return ResponseEntity.ok(updatedBorrowedBook);
        } else {
            return ResponseEntity.notFound().build();
        }
    }}
