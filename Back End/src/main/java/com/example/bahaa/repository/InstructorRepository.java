package com.example.bahaa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bahaa.model.Instructor;


public interface InstructorRepository extends JpaRepository<Instructor, Integer> {

}
