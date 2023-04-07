package tn.enicar.library_backend.Models.Collections;

import jakarta.persistence.*;
import lombok.Data;
import org.jetbrains.annotations.NotNull;

import java.sql.Date;

@Data
@Entity
@Table(name = "Exam")
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String author;
    @Column(nullable = false)
    private String Type;
    @Lob
    private byte[] pdf;
    private String publisher;

    @NotNull
    private Integer publicationYear;

    private String language;

    @NotNull
    private Integer pageCount;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, columnDefinition = "TINYINT(1)")
    private boolean isAvailable;
}
