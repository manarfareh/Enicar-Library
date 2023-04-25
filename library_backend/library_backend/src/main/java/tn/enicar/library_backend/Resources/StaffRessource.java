package tn.enicar.library_backend.Resources;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.enicar.library_backend.Models.Actors.Staff;
import tn.enicar.library_backend.Services.StaffService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/staff")

public class StaffRessource {
    private final StaffService staffService;

    public StaffRessource(StaffService staffService) {
        this.staffService = staffService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Staff>> getAllStaff () {
        List<Staff> staffs = staffService.findAllStaffs();
        return new ResponseEntity<>(staffs, HttpStatus.OK);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<?> deleteStaff(@PathVariable("id") Long id) {
        staffService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Staff> getStaffById ( @PathVariable("id") Long id) throws Throwable {
        Staff staff = staffService.findStaffById(id);
        return new ResponseEntity<>(staff ,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Staff> addStaff (@RequestBody Staff staff) {
        Staff newStaff = staffService.addStaff(staff);
        return new ResponseEntity<>(newStaff, HttpStatus.CREATED);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Staff> updateStaff(@PathVariable("id") Long id, @RequestBody Staff newStaff) {
        System.out.println("Received request to update staff with ID: " + id);

        Optional<Staff> optionalStaff = staffService.findById(id);

        if (optionalStaff.isPresent()) {
            Staff staff= optionalStaff.get();
            staff.setName(newStaff.getName());
            staff.setEmail(newStaff.getEmail());
            staff.setDob(newStaff.getDob());
            staff.setPhoneNumber(newStaff.getPhoneNumber());
            staff.setPassword(newStaff.getPassword());
            staff.setImageUrl(newStaff.getImageUrl());
            staff.setRole(newStaff.getRole());

            Staff updatedStaff = staffService.save(staff);
            return ResponseEntity.ok(updatedStaff);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
