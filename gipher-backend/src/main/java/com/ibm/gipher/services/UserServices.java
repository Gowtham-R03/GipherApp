package com.ibm.gipher.services;

import java.util.List;

import com.ibm.gipher.model.UserRegister;

public interface UserServices {
	public List<UserRegister> getAllUser();
	
	public UserRegister addUser(UserRegister user);
	
	public UserRegister findByUserId(String userId);

	public UserRegister updateUser(UserRegister user);

	public void deleteByUserId(String userId);
}
