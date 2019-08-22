package com.example.bahaa.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.example.bahaa.model.Student;
import com.example.bahaa.repository.StudentRepository;





@RestController
@RequestMapping("/api")
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;
	
	@PostMapping("/students")
	@CrossOrigin(origins = "http://localhost:3000")
	public Student postNewStudent(@RequestBody Student student) 
	{
		return studentRepository.save(student);
		}
	
	
	
	@GetMapping("/students")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Student> getAllStudents() 
	{
		return  studentRepository.findAll();
		}
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:3000")
	public boolean loginVerified(@RequestBody Student student) {
		Student fetchedStudent = studentRepository.findByEmail(student.getEmail());
		System.out.println(fetchedStudent);
		if(fetchedStudent == null) {
			System.out.println("Student is null");
			return false;
		}
		String matchedPassword = fetchedStudent.getPassword();
		if(matchedPassword.equals(student.getPassword()) ) {
			System.out.println("Student matched");
			return true;
		}
		else {
			System.out.println("Wrong Login");
			return false;
		}
	}
	
	@GetMapping("/students/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public Student getStudent(@PathVariable int id) 
	 {
		  Student student = studentRepository.findById(id).get();
		  return student;
		 }
	
	
	@DeleteMapping("/students/{id}")	
	@CrossOrigin(origins = "http://localhost:3000")
	public String deleteStudent(@PathVariable int id) 
	{
		  Student student = studentRepository.findById(id).get();
		  studentRepository.delete(student);
		  return "Deleted Successfully";
		 }
	
	
	@PutMapping("/students/{id}")	
	@CrossOrigin(origins = "http://localhost:3000")
	public String updateStudent(@PathVariable int id, @RequestBody Student updatedStudent) 
	{
		Student student = studentRepository.findById(id).get();
		student.setBirthDate(updatedStudent.getBirthDate());
		student.setEmail(updatedStudent.getEmail());
		student.setGender(updatedStudent.getGender());
		student.setImageUrl(updatedStudent.getImageUrl());
		student.setName(updatedStudent.getName());
		student.setPassword(updatedStudent.getPassword());
		studentRepository.save(student);
		return "Updated Successfully";
		}
	
}
