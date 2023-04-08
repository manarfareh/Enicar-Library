package tn.enicar.library_backend.Models.Collections;

import jakarta.persistence.*;
import lombok.Data;
import org.jetbrains.annotations.NotNull;

import java.io.Serializable;

@Data
@Entity
@Table (name = "Article")
@DiscriminatorValue("article")
public class Article extends Book implements Serializable {



}
