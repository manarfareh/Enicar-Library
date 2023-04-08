package tn.enicar.library_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.enicar.library_backend.Exception.UserNotFoundException;
import tn.enicar.library_backend.Models.Actors.Student;
import tn.enicar.library_backend.Repositories.StudentRepository;

import java.util.List;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> findAllStudents()
    {
      return   this.studentRepository.findAll();
    }

    public Student findStudentById(Long id) throws Throwable {
        return this.studentRepository.findStudentById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public Student addStudent(Student student)
    {
        return this.studentRepository.save(student);
    }
    public void deleteStudent(Long id)
    {
        this.studentRepository.deleteStudentById(id);
    }
}
