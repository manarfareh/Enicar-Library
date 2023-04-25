package tn.enicar.library_backend.Models.Collections;

import jakarta.persistence.*;
import lombok.Data;
import tn.enicar.library_backend.Models.Actors.Student;

import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDate;

@Entity
@Table(name = "borrowing_requests")
@Data
public class BorrowingRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date_request")
    private Date dateRequest;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    // constructor, getters, and setters
}

