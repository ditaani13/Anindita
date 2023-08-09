package com.project.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Courses;
import com.project.demo.model.Student;
import com.project.demo.services.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/stud")
public class StudentController {

	@Autowired
	private StudentService studentService;   
	
	//Add new student
	@PostMapping("/addStudent")
	public Student addStudent(@RequestBody Student student)
	{
		return studentService.addStudent(student);		
	}
	
	//Add more than one new student
	@PostMapping("/addStudents")
	public List<Student> addAllStudents(@RequestBody List<Student> students)
	{
		return studentService.addAllStudents(students);		
	}
	
	// Get student by ID
	@GetMapping("/getStudentByID/{id}")
	public Student getStudentById(@PathVariable int id)
	{
		return studentService.getStudentByID(id);	
	}
	
	// Get student by firstname
	@GetMapping("/getStudentByName/{firstname}")
	public List<Student> getStudentByName(@PathVariable String firstname)
	{
		return studentService.getStudentByName(firstname);	
	}
	
	
	//Get All Students details
		@GetMapping("/students")
		public List<Student> getStudents()
		{
			return studentService.getStudents();
			
		}
	
	// Update student
	@PutMapping("/updateStudent")
	public Student updateStudent(@RequestBody Student student)
	{
		return studentService.updateStudent(student);		
	}
	
	// Delete student
//	@DeleteMapping("/deleteStudentById/{id}")
//	public String deleteStudentById(@PathVariable int id)
//	{
//		if(studentService.deleteStudentByID(id))
//		{
//			return "Student deleted with id: " + id;
//		}
//		else
//		{
//		    return "ERROR!!! Student deletion failed with id: " + id;
//		}
//	}
	
	// another delete try
	@DeleteMapping("/deleteStudentById/{id}")
	public boolean deleteStudentById(@PathVariable int id)
	{
			return studentService.deleteStudentByID(id);	
		
	}
	
}
