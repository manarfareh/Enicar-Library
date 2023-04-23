package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Models.Actors.Staff;
import tn.enicar.library_backend.Repositories.StaffRepo;

import java.util.List;

@Service
public class StaffService {
    private final StaffRepo staffRepo;

    @Autowired
    public StaffService(StaffRepo staffRepo) {this.staffRepo = staffRepo;}

    public List<Staff> findAllStaffs()
    {
        return   this.staffRepo.findAll();
    }
}
