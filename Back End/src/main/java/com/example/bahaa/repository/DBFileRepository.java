package com.example.bahaa.repository;

import com.example.bahaa.model.DBFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DBFileRepository extends JpaRepository<DBFile, String> {

//	DBFile findTopByOrderByIdDesc();
	
}
