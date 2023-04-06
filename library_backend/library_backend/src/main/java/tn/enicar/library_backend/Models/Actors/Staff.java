package tn.enicar.library_backend.Models.Actors;

import tn.enicar.library_backend.Models.PhoneNumber;

import java.time.LocalDate;

public class Staff extends User {
    public Staff(Long id, String name, String email, LocalDate dob, PhoneNumber phoneNumber) {
        super(id, name, email, dob, phoneNumber);
    }

    public Staff(String name, String email, LocalDate dob, PhoneNumber phoneNumber) {
        super(name, email, dob, phoneNumber);
    }
}
