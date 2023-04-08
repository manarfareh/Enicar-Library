package tn.enicar.library_backend.Models.Collections;


import jakarta.persistence.*;
import lombok.Data;
import org.jetbrains.annotations.NotNull;

import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "PfeBook")
@DiscriminatorValue("pfebook")
public class PfeBook extends Book implements Serializable {


}
