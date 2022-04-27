package com.ibm.gipher.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ibm.gipher.model.UserRegister;
import com.ibm.gipher.services.UserServices;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserRegisterController {
	
	@Autowired
	private UserServices service;
	
	@GetMapping("/getUsers")
	public List<UserRegister> getAllUser(){
		return service.getAllUser();
	}
	
	@PostMapping("/addUser")
	public UserRegister addUser(@RequestBody UserRegister user ) {
//		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//		String encodedPassword = encoder.encode(user.getPassword());
//		user.setPassword(encodedPassword);
		return service.addUser(user);
	}
	
	@GetMapping("/getUser/{userId}")
	public UserRegister findByUserId(@PathVariable String userId){
		return service.findByUserId(userId);
	}
	
	@PutMapping("/updateUser")
	public UserRegister updateUser(@RequestBody UserRegister user) {
		
		return service.updateUser(user);
	}
	
	@DeleteMapping("deleteUser/{userId}")
	public void deleteById(@PathVariable String userId) {
		service.deleteByUserId(userId);
	}
	
}
