package tn.enicar.library_backend.Models.Actors;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import tn.enicar.library_backend.Models.PhoneNumber;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.Period;

@Data
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class User implements Serializable {
    //This field is used to ensure that serialized objects can be deserialized
    // correctly even if the code of the class has changed between serialization and deserialization.
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @SequenceGenerator(
            name = "user_seq",
            sequenceName = "user_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_seq"
    )
    protected Long id;
    protected String name;

    protected String email; //mail @enicar.ucar.tn
    protected LocalDate dob;
    @Transient
    protected Integer age;
    @Embedded
    protected PhoneNumber phoneNumber;

    protected String password;

    public Integer getAge() {
        return  Period.between(this.dob, LocalDate.now()).getYears();
    }
    public User(
            Long id,
            String name,
            String email,
            LocalDate dob,
            PhoneNumber phoneNumber,
            String password
    )
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.age=getAge();
        this.phoneNumber = phoneNumber;
        this.password = password;



    }

    public User(String name,
                String email,
                LocalDate dob,
                PhoneNumber phoneNumber,
                String password)
    {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.age = getAge();
        this.phoneNumber = phoneNumber;
        this.password = password;

    }

}
