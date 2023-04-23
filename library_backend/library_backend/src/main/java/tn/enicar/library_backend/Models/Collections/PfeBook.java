package tn.enicar.library_backend.Models.Collections;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "PfeBook")
@DiscriminatorValue("pfebook")
public class PfeBook extends Book implements Serializable {
    public PfeBook(){
        super();
    }

    public PfeBook(String title,String author,int IsDigit,String url,Integer publicationYear,
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
