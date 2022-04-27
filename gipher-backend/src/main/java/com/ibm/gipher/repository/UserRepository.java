package com.ibm.gipher.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.gipher.model.UserRegister;

@Repository
public interface UserRepository extends JpaRepository<UserRegister, String> {
	
	public UserRegister findByUserId(String userId);

}
