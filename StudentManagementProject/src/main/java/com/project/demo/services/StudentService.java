package com.project.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.model.Student;
import com.project.demo.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository studentRepository;  // "studentRepository" is the object of "StudentService" class.
    
	// add student
	public Student addStudent(Student student)
	{
		return studentRepository.save(student);
	}

	// get all student
	public List<Student> addAllStudents(List<Student> students) {
		return studentRepository.saveAll(students);
	}
	
    // get student by id
	public Student getStudentByID(int id) {
		return studentRepository.findById(id).orElse(null);
	}

	// get student by name
	public List<Student> getStudentByName(String firstname) {
		return studentRepository.findByFirstname(firstname);
	}
	
	// update student
	public Student updateStudent(Student student) {
		Student existingSTUD = studentRepository.findById(student.getId()).orElse(null);
		if(existingSTUD == null)
		{
			return studentRepository.save(student);
		}
		else
		{
			studentRepository.deleteById(existingSTUD.getId());
			studentRepository.save(student);
		}
		return student;
	}

	
	// another delete try
	public boolean deleteStudentByID(int id) {
		Student existingSTUD = studentRepository.getById(id);
		if(existingSTUD != null)
		{
			studentRepository.deleteById(id);
			return true;
		}
		return false;
	}

	public List<Student> getStudents() {
		return studentRepository.findAll();
	}

}
