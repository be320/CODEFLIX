package com.example.bahaa.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "course_id")
	private int id;
	private String title;
	private double rating;
	@Column(name = "instructor_id")
	private int instructor_id;
	private double price;
	private String category;
	private String description;
	@OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "image_id", referencedColumnName = "id")
    private DBFile imageUrl;
	@OneToMany(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
	@JoinColumn(name = "course_id", referencedColumnName = "course_id")
    private Set<Tutorial> tutorials;
	@ManyToMany(fetch = FetchType.EAGER,cascade=CascadeType.ALL,mappedBy = "courses")
	private Set<Student> students;
	
	public Course() {}

	
	public DBFile getImageUrl() {
		return imageUrl;
	}
	
	public void setImageUrl(DBFile imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	public void setStudents(Set<Student> students) {
		this.students = students;
	}
	
	public Set<Student> getStudents() {
		return students;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}


	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public int getInstructor_id() {
		return instructor_id;
	}

	public void setInstructor_id(int instructor_id) {
		this.instructor_id = instructor_id;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<Tutorial> getTutorials() {
		return tutorials;
	}

	public void setTutorials(Set<Tutorial> tutorials) {
		this.tutorials = tutorials;
	}

	public int getId() {
		return id;
	}
	
	
}
