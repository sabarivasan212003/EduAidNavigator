package com.example.edu_aid.Repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
// import com.example.demo.model.*;
import org.springframework.stereotype.Repository;

import com.example.edu_aid.Model.Admin1;

// import firstsample.demo.Model.Admin;
@Repository
public interface Adminrepository extends JpaRepository<Admin1, Long>
{
	// Admin findById(int id);
	Optional<Admin1> findByEmail(String email);
}