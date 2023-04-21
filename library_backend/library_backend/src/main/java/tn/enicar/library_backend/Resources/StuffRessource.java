package tn.enicar.library_backend.Resources;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.enicar.library_backend.Models.Actors.Staff;
import tn.enicar.library_backend.Services.StaffService;

import java.util.List;

@RestController
@RequestMapping("/staff")
public class StuffRessource {
    private StaffService staffService;

    public void StaffRessource(StaffService staffService) {
        this.staffService = staffService;
    }

    public StuffRessource(StaffService staffService) {
        this.staffService = staffService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Staff>> getAllStaffs () {
        List<Staff> staffs = staffService.findAllStaffs();
        return new ResponseEntity<>(staffs, HttpStatus.OK);
    }
}
