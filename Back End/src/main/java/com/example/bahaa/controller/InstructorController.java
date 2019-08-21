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

import com.example.bahaa.model.Instructor;
import com.example.bahaa.repository.InstructorRepository;





@RestController
@RequestMapping("/api")
public class InstructorController {

	@Autowired
	private InstructorRepository instructorRepository;
	
	@PostMapping("/instructors")
	@CrossOrigin(origins = "http://localhost:3000")
	public Instructor postNewInstructor(@RequestBody Instructor instructor) 
	{
		return instructorRepository.save(instructor);
		}
	
	
	
	@GetMapping("/instructors")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Instructor> getAllInstructors() 
	{
		return  instructorRepository.findAll();
		}
	
	
	@GetMapping("/instructors/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public Instructor getInstructor(@PathVariable int id) 
	 {
		  Instructor instructor = instructorRepository.findById(id).get();
		  return instructor;
		 }
	
	
	@DeleteMapping("/instructors/{id}")	
	@CrossOrigin(origins = "http://localhost:3000")
	public String deleteInstructor(@PathVariable int id) 
	{
		  Instructor instructor = instructorRepository.findById(id).get();
		  instructorRepository.delete(instructor);
		  return "Deleted Successfully";
		 }
	
	
	@PutMapping("/instructors/{id}")	
	@CrossOrigin(origins = "http://localhost:3000")
	public String updateInstructor(@PathVariable int id, @RequestBody Instructor updatedInstructor) 
	{
		Instructor instructor = instructorRepository.findById(id).get();
		instructor.setCourses(updatedInstructor.getCourses());
		instructor.setDescription(updatedInstructor.getDescription());
		instructor.setImageUrl(updatedInstructor.getImageUrl());
		instructor.setName(updatedInstructor.getName());
		instructor.setRating(updatedInstructor.getRating());
		instructorRepository.save(instructor);
		return "Updated Successfully";
		}
	
}
