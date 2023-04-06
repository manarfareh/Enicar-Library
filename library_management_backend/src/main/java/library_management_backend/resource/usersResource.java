package library_management_backend.resource;
import org.springframework.http.HttpStatus;
import java.util.List;
import com.example.demo.users;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import librarManagementBackend.Service.usersService;

@RestController
@RequestMapping("/users")
public class usersResource {
    private final usersService usersService;
    public usersResource(usersService usersService) {
		this.usersService = usersService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<users>> getAllUsers () {
        List<users> user = usersService.findAllUsers();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }}
