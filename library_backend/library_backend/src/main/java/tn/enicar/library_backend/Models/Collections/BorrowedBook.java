package tn.enicar.library_backend.Models.Collections;

import jakarta.persistence.*;
import lombok.Data;
import tn.enicar.library_backend.Models.Actors.Student;

import java.sql.Date;
import java.time.LocalDate;

@Entity
@Table(name = "borrowedbook")
@Data
public class BorrowedBook {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @OneToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(name = "borrow_date")
    private Date borrowDate;

    @Column(name = "return_date")
    private Date returnDate;

}
