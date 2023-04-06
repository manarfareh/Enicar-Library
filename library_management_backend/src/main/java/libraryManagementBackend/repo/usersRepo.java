package libraryManagementBackend.repo;
import com.example.demo.users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;
import com.example.demo.users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface usersRepo extends JpaRepository<users,Long> {
}
