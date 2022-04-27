package com.ibm.gipher.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.gipher.model.UserRegister;
import com.ibm.gipher.repository.UserRepository;

@Service
public class UserServiceImpl implements UserServices {
	
	@Autowired
	private UserRepository repository;
	
	public List<UserRegister> getAllUser(){
		return repository.findAll();
	}
	
	public UserRegister addUser(UserRegister user) {
		return repository.save(user);
	}
	
	public UserRegister findByUserId(String userId){
		return this.repository.findByUserId(userId);
	}

	@Override
	public UserRegister updateUser(UserRegister user) {
		// TODO Auto-generated method stub
		return this.repository.save(user);
	}

	@Override
	public  void deleteByUserId(String userId) {
		// TODO Auto-generated method stub
		this.repository.deleteById(userId);
	}

	
}
