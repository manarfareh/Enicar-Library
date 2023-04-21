package tn.enicar.library_backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.enicar.library_backend.Models.Actors.Staff;
import tn.enicar.library_backend.Models.Actors.Student;

public interface StaffRepo extends JpaRepository<Staff,Long> {
}
