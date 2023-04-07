package tn.enicar.library_backend.Models.Collections;

import jakarta.persistence.*;
import lombok.Data;
import org.jetbrains.annotations.NotNull;
@Data
@Entity
@Table (name = "Article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    public Article(){
        super();
    }
    public Article(String title,String author,String Type,byte[] pdf,String publisher,Integer publicationYear,
                   String language,Integer pageCount,String description,boolean isAvailable){

        this.title=title;
        this.author=author;
        this.Type=Type;
        this.pdf=pdf;
        this.publisher=publisher;
        this.publicationYear=publicationYear;
        this.language=language;
        this.pageCount=pageCount;
        this.description=description;
        this.isAvailable=isAvailable;

    }

}
