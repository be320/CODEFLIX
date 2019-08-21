package com.example.bahaa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bahaa.model.Course;


public interface CourseRepository extends JpaRepository<Course, Integer> {

}
