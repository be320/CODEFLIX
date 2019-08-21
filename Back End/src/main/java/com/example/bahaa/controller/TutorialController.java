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

import com.example.bahaa.model.Tutorial;
import com.example.bahaa.repository.TutorialRepository;





@RestController
@RequestMapping("/api")
public class TutorialController {

	@Autowired
	private TutorialRepository tutorialRepository;
	
	@PostMapping("/tutorials")
	@CrossOrigin(origins = "http://localhost:3000")
	public Tutorial postNewTutorial(@RequestBody Tutorial tutorial) 
	{
		return tutorialRepository.save(tutorial);
		}
	
	
	
	@GetMapping("/tutorials")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Tutorial> getAllTutorials() 
	{
		return  tutorialRepository.findAll();
		}
	

	
	@GetMapping("/tutorials/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public Tutorial getTutorial(@PathVariable int id) 
	 {
		  Tutorial tutorial = tutorialRepository.findById(id).get();
		  return tutorial;
		 }
	
	
	@DeleteMapping("/tutorials/{id}")	
	@CrossOrigin(origins = "http://localhost:3000")
	public String deleteTutorial(@PathVariable int id) 
	{
		  Tutorial tutorial = tutorialRepository.findById(id).get();
		  tutorialRepository.delete(tutorial);
		  return "Deleted Successfully";
		 }
	
	
	@PutMapping("/tutorials/{id}")	
	@CrossOrigin(origins = "http://localhost:3000")
	public String updateTutorial(@PathVariable int id, @RequestBody Tutorial updatedTutorial) 
	{
		Tutorial tutorial = tutorialRepository.findById(id).get();
		tutorial.setCourse_id(updatedTutorial.getCourse_id());
		tutorial.setTitle(updatedTutorial.getTitle());
		tutorial.setVideoUrl(updatedTutorial.getVideoUrl());
		tutorialRepository.save(tutorial);
		return "Updated Successfully";
		}
	
}
