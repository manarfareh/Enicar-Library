package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Exception.UserNotFoundException;
import tn.enicar.library_backend.Models.Actors.Staff;
import tn.enicar.library_backend.Repositories.StaffRepo;

import java.util.List;
import java.util.Optional;

@Service
public class StaffService {
    private static StaffRepo staffRepo;

    @Autowired
    public StaffService(StaffRepo staffRepo) {this.staffRepo = staffRepo;}

    public List<Staff> findAllStaffs()
    {
        return   this.staffRepo.findAll();
    }

    public Staff findStaffById(Long id) throws Throwable {
        return this.staffRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public Staff addStaff(Staff staff)
    {
        return this.staffRepo.save(staff);
    }
    public void deleteStaff(Long id)
    {
        this.staffRepo.deleteById(id);
    }
    public static Staff save(Staff staff){
        staffRepo.save(staff);
        return staff;
    }
    public Optional<Staff> findById(Long id) {
        String queryString = "SELECT b FROM TStaff b WHERE b.id = " + id;
        System.out.println("Executing query: " + queryString);
        return staffRepo.findById(id);
    }

    public static void deleteById(Long id){
        staffRepo.deleteById(id);
    }
}
