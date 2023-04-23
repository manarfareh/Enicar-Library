package tn.enicar.library_backend.Models.Collections;

import jakarta.persistence.*;
import tn.enicar.library_backend.Models.Actors.Student;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "borrowing_requests")
public class BorrowingRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date_request")
    private LocalDate dateRequest;

    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @MapsId("bookId")
    @JoinColumn(name = "book_id")
    private Book book;

    // constructor, getters, and setters
}

