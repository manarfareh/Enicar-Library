package tn.enicar.library_backend.Models.Actors;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import tn.enicar.library_backend.Models.PhoneNumber;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "T_STAFF")
@Data
@NoArgsConstructor
public class Staff extends User implements Serializable {

    public Staff(String name, String email, LocalDate dob, PhoneNumber phoneNumber,String password) {
        super(name, email, dob, phoneNumber,password);
    }
}
