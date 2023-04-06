package tn.enicar.library_backend.Models.Actors;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import tn.enicar.library_backend.Models.PhoneNumber;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "T_STUDENT")

public class Student extends User implements Serializable {
    public Student(Long id, String name, String email, LocalDate dob, PhoneNumber phoneNumber) {
        super(id, name, email, dob, phoneNumber);
    }

    public Student(String name, String email, LocalDate dob, PhoneNumber phoneNumber) {
        super(name, email, dob, phoneNumber);
    }
}
