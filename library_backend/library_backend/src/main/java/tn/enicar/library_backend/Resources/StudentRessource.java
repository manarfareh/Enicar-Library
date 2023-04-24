package tn.enicar.library_backend.Resources;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.enicar.library_backend.Models.Actors.Student;
import tn.enicar.library_backend.Models.Collections.Book;
import tn.enicar.library_backend.Services.StudentService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/students")

public class StudentRessource {
    private final StudentService studentService;

    public StudentRessource(StudentService studentService) {
        this.studentService = studentService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Student>> getAllEmployees () {
        List<Student> students = studentService.findAllStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable("id") Long id) {
        studentService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Student> getStudentById ( @PathVariable("id") Long id) throws Throwable {
        Student student = studentService.findStudentById(id);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Student> addStudent (@RequestBody Student student) {
        Student newStudent = studentService.addStudent(student);
        return new ResponseEntity<>(newStudent, HttpStatus.CREATED);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Student> updateBook(@PathVariable("id") Long id, @RequestBody Student newStudent) {
        System.out.println("Received request to update student with ID: " + id);

        Optional<Student> optionalStudent = studentService.findById(id);

        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.setName(newStudent.getName());
            student.setEmail(newStudent.getEmail());
            student.setDob(newStudent.getDob());
            student.setPhoneNumber(newStudent.getPhoneNumber());
            String cls=newStudent.getClass().toString();
            student.setClass(cls);
            student.setPassword(newStudent.getPassword());
            student.setImageUrl(newStudent.getImageUrl());
            student.setRole(newStudent.getRole());

            Student updatedStudent = studentService.save(student);
            return ResponseEntity.ok(updatedStudent);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
