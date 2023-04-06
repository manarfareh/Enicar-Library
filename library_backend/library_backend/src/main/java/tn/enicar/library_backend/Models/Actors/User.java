package tn.enicar.library_backend.Models.Actors;

import jakarta.persistence.*;
import lombok.Data;
import tn.enicar.library_backend.Models.PhoneNumber;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.Period;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class User implements Serializable {
    @Id
    @SequenceGenerator(
            name = "student_seq",
            sequenceName = "student_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_seq"
    )
    protected Long id;
    protected String name;

    protected String email; //mail @enicar.ucar.tn
    protected LocalDate dob;
    @Transient
    protected Integer age;

    protected PhoneNumber phoneNumber;

    public Integer getAge() {
        return  Period.between(this.dob, LocalDate.now()).getYears();
    }
    public User(
            Long id,
            String name,
            String email,
            LocalDate dob,
            PhoneNumber phoneNumber
    )
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.age=getAge();
        this.phoneNumber = phoneNumber;



    }

    public User(String name, String email, LocalDate dob,PhoneNumber phoneNumber) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.age = getAge();
        this.phoneNumber = phoneNumber;
    }
    @Embedded
    public PhoneNumber getPhoneNumber() {
        return phoneNumber;
    }
}
