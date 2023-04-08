package tn.enicar.library_backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.enicar.library_backend.Models.Actors.Student;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student,Long> {

    Optional<Student> findStudentById(Long id);

    void deleteStudentById(Long id);
}
