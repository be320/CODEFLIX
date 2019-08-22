package com.example.bahaa.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.bahaa.model.Student;


public interface StudentRepository extends JpaRepository<Student, Integer>{

	@Query("FROM Student s WHERE s.email = :email")
	Student findByEmail(String email);
	
}
