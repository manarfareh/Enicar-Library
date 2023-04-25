package tn.enicar.library_backend.Models.Actors;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Import;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import tn.enicar.library_backend.Models.PhoneNumber;
import tn.enicar.library_backend.Models.Role;
import tn.enicar.library_backend.Security.Config.SecurityConfiguration;
import tn.enicar.library_backend.Security.Token.Token;
import tn.enicar.library_backend.Models.Class;
import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "T_STUDENT" ,  uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Student extends User implements Serializable, UserDetails {
    @Enumerated(EnumType.STRING)
    private Class aClass;

    @OneToMany(mappedBy = "student")
    private List<Token> tokens;


    public Student(String name, String email, Date dob, PhoneNumber phoneNumber, Class aClass , String password, String imageUrl) {
        super(name, email, dob, phoneNumber,password,imageUrl);
        this.aClass = aClass;
    }
    @Builder
    public Student(String email, String password,Role role) {
        super(email, password,role);
    }
    public Student(String email, String password, Collection<GrantedAuthority> mapRolesToAuthorities) {
    }


    public Collection<GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setClass(String aClass) {
        this.aClass.setClassName(aClass);
    }
}
