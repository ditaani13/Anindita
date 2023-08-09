package com.project.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.demo.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer> {

	List<Student> findByFirstname(String firstname);

}
