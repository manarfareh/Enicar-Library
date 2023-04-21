package tn.enicar.library_backend.Models.Collections;


import jakarta.persistence.*;
import lombok.Data;
import org.jetbrains.annotations.NotNull;

import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "Book")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "Book_TYPE",discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue("book")
public class Book implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    protected String title;

    protected String author;
    @Column(nullable = false)
    protected int IsDigit;//0 if physical 1 if digital
    @Lob
    protected String url;//if  it's a digital book it has a url


    protected Integer publicationYear;

    protected String language;


    protected Integer pageCount;

    @Column(columnDefinition = "TEXT")
    protected String description;

    @Column(nullable = false, columnDefinition = "TINYINT(1)")
    protected int isAvailable;
    public Book(){
        super();
    }

    public Book(String title,String author,int IsDigit,String url,Integer publicationYear,
                   String language,Integer pageCount,String description,int isAvailable){

        this.title=title;
        this.author=author;
        this.IsDigit=IsDigit;
        this.url=url;
        this.publicationYear=publicationYear;
        this.language=language;
        this.pageCount=pageCount;
        this.description=description;
        this.isAvailable=isAvailable;

    }
}

