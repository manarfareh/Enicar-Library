package tn.enicar.library_backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.enicar.library_backend.Models.Actors.Staff;

public interface StaffRepo extends JpaRepository<Staff,Long> {
}
