package tn.enicar.library_backend.Models.Actors;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import tn.enicar.library_backend.Models.PhoneNumber;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "T_STUDENT")
@AllArgsConstructor

@NoArgsConstructor
public class Student extends User implements Serializable {

    private Class aClass;

    public Student(String name, String email, LocalDate dob, PhoneNumber phoneNumber, Class aClass ,String password) {
        super(name, email, dob, phoneNumber,password);
        this.aClass = aClass;
    }
}
