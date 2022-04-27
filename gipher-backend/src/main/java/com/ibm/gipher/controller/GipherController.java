package com.ibm.gipher.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.gipher.converter.JsonUse;
import com.ibm.gipher.model.Gipher;
//import com.ibm.gipher.model.Images;
//import com.ibm.gipher.model.Original;
import com.ibm.gipher.services.GipherService;

@RestController
@RequestMapping("/giphers")
@CrossOrigin(origins = "http://localhost:4200")
public class GipherController {
	
	@Autowired
	private GipherService service;
	
	@GetMapping("/get")
	public List<Gipher> getGiphers(){
		return this.service.getGiphers();
	}
	
	@PostMapping("/addGiphers")
	public Gipher addGiphers(@RequestBody Gipher gipherBody) {
		
//		
//		Gipher gipher = new Gipher();
//		Images JavaOriginal = JsonUse.convertJsonToJava(images.toString(), Images.class);
//		gipher.setImages((List<Images>) JavaOriginal);
		return this.service.addGipher(gipherBody);
	}
	
	@DeleteMapping("/deleteGipher/{gipherId}")
	public void deleteGipher(@PathVariable String gipherId) {
		this.service.deleteGipher(gipherId);
	}
	
	@GetMapping("/get/{favoritedBy}")
	public List<Gipher> getFavoritedBy(@PathVariable String favoritedBy){
		return this.service.getFavoritedBy(favoritedBy);
	}

}
