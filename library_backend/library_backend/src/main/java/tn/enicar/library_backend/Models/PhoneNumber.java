package tn.enicar.library_backend.Models;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode
@Embeddable
public class PhoneNumber {
    private String phoneNumber;

    public PhoneNumber(String number) {
        //check validity of number
        this.phoneNumber = number;
    }
    //getter, comparator, etc...
}
