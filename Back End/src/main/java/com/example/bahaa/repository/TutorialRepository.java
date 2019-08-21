package com.example.bahaa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bahaa.model.Tutorial;


public interface TutorialRepository  extends JpaRepository<Tutorial, Integer> {

}
