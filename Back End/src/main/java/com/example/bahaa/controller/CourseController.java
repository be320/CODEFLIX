package com.example.bahaa.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bahaa.model.Course;
import com.example.bahaa.model.Tutorial;
import com.example.bahaa.repository.CourseRepository;






@RestController
@RequestMapping("/api")
public class CourseController {

	@Autowired
	private CourseRepository courseRepository;
	
	@PostMapping("/courses")
	@CrossOrigin(origins = "http://localhost:3000")
	public Course postNewCourse(@RequestBody Course course) 
	{
		return courseRepository.save(course);
		}
	
	
	
	@GetMapping("/courses")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Course> getAllCourses() 
	{
		return  courseRepository.findAll();
		}
	
	
	@GetMapping("/courses/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public Course getCourse(@PathVariable int id) 
	 {
		  Course course = courseRepository.findById(id).get();
		  return course;
		 }
	
	@GetMapping("/courses/{id}/tutorials")
	@CrossOrigin(origins = "http://localhost:3000")
	public Set<Tutorial> getCourseTutorials(@PathVariable int id) 
	 {
		  Set<Tutorial> tutorials = courseRepository.findById(id).get().getTutorials();
		  return tutorials;
		 }
	
	@DeleteMapping("/courses/{id}")	
	@CrossOrigin(origins = "http://localhost:3000")
	public String deleteCourse(@PathVariable int id) 
	{
		  Course course = courseRepository.findById(id).get();
		  courseRepository.delete(course);
		  return "Deleted Successfully";
		 }
	
	
	@PutMapping("/courses/{id}")	
	@CrossOrigin(origins = "http://localhost:3000")
	public String updateCourse(@PathVariable int id, @RequestBody Course updatedCourse) 
	{
		Course course = courseRepository.findById(id).get();
		course.setCategory(updatedCourse.getCategory());
		course.setDescription(updatedCourse.getDescription());
		course.setImageUrl(updatedCourse.getImageUrl());
		course.setInstructor_id(updatedCourse.getInstructor_id());
		course.setPrice(updatedCourse.getPrice());
		course.setRating(updatedCourse.getRating());
		course.setTitle(updatedCourse.getTitle());
		course.setTutorials(updatedCourse.getTutorials());
		courseRepository.save(course);
		return "Updated Successfully";
		}
	
}
