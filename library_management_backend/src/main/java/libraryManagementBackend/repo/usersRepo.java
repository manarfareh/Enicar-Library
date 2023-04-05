package libraryManagementBackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import libraryManagementBackend.model.users;

public interface usersRepo extends JpaRepository<users,Long> {
	

}
