package com.ibm.gipher.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.gipher.model.ImageModel;
import com.ibm.gipher.model.UserRegister;

@Repository
public interface ImageRepository extends JpaRepository<ImageModel, Long> {
	
	public Optional<ImageModel> findById(Long id);

}
