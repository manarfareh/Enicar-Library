package librarManagementBackend.Service;

import java.util.List;
import com.example.demo.users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import libraryManagementBackend.repo.usersRepo;

@Service
@Transactional
public class usersService {
 private  usersRepo UsersRepo ; 
 @Autowired
 public users usersService(users user) {
	 return UsersRepo.save(user);
 }
 public List<users> findAllUsers() {
     return ( List<users>) UsersRepo.findAll();
 }
}
