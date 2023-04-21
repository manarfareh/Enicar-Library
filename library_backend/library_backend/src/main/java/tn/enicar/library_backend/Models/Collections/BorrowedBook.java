package tn.enicar.library_backend.Models.Collections;

import jakarta.persistence.*;
import tn.enicar.library_backend.Models.Actors.Student;

import java.time.LocalDate;

@Entity
@Table(name = "book_student")

public class BorrowedBook {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(name = "borrow_date")
    private LocalDate borrowDate;

    @Column(name = "return_date")
    private LocalDate returnDate;

}
