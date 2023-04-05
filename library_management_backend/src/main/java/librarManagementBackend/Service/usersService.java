package librarManagementBackend.Service;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import libraryManagementBackend.model.users;
import libraryManagementBackend.repo.usersRepo;
@Service
public class usersService {
 private final usersRepo UsersRepo ; 
 @Autowired
 public usersService(usersRepo UsersRepo) {
	 this.UsersRepo=UsersRepo;
 }
}
