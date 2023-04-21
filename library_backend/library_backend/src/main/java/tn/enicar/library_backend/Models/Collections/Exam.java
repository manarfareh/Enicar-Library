package tn.enicar.library_backend.Models.Collections;

import jakarta.persistence.*;
import lombok.Data;
import org.jetbrains.annotations.NotNull;

import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "Exam")
@DiscriminatorValue("exam")
public class Exam extends Book implements Serializable {
   private  String subject;
   private Class aClass;
   public Exam(){
      super();
   }
   public Exam(String title,String author,int Type,String url,Integer publicationYear,
               String language,Integer pageCount,String description,int isAvailable,String subject,Class aClass)
   {
      new Book( title,author, Type, url, publicationYear, language, pageCount, description, isAvailable);
      this.subject=subject;
      this.aClass=aClass;
   }
}
