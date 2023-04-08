package tn.enicar.library_backend.Models.Actors;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import tn.enicar.library_backend.Models.Class;
import tn.enicar.library_backend.Models.PhoneNumber;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "T_STUDENT" ,  uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
@AllArgsConstructor

@NoArgsConstructor
public class Student extends User implements Serializable {
    @Enumerated(EnumType.STRING)

    private Class aClass;

    public Student(String name, String email, LocalDate dob, PhoneNumber phoneNumber, Class aClass ,String password,String imageUrl) {
        super(name, email, dob, phoneNumber,password,imageUrl);
        this.aClass = aClass;
    }
}
