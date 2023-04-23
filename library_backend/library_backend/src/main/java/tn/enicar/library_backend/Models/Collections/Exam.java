package tn.enicar.library_backend.Models.Collections;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;

import java.io.Serializable;

@Data
@Getter
@Entity
@Table(name = "Exam")
@DiscriminatorValue("exam")
public class Exam extends Book implements Serializable {
   private  String subject;
   private Class aClass;
   public Exam(){
      super();
   }


   public Exam(String title,String author,int IsDigit,String url,Integer publicationYear,
               String language,Integer pageCount,String description,int isAvailable, String subject,Class aClass){

      this.title=title;
      this.author=author;
      this.IsDigit=IsDigit;
      this.url=url;
      this.publicationYear=publicationYear;
      this.language=language;
      this.pageCount=pageCount;
      this.description=description;
      this.isAvailable=isAvailable;
      this.subject=subject;
      this.aClass=aClass;
   }


}
