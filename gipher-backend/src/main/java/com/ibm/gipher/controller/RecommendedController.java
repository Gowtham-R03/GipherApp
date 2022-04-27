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
import org.springframework.web.bind.annotation.RestController;

import com.ibm.gipher.model.Gipher;
import com.ibm.gipher.model.Recommended;
import com.ibm.gipher.services.GipherService;
import com.ibm.gipher.services.RecommendedService;

@RestController
@RequestMapping("/recommended")
@CrossOrigin(origins = "http://localhost:4200")
public class RecommendedController {
	@Autowired
	private RecommendedService service;
	
	@GetMapping("/get")
	public List<Recommended> getRecomGif(){
		return this.service.getRecomGif();
	}
	
	@PostMapping("/addRecomGif")
	public Recommended addGiphers(@RequestBody Recommended recommended) {
		
//		
//		Gipher gipher = new Gipher();
//		Images JavaOriginal = JsonUse.convertJsonToJava(images.toString(), Images.class);
//		gipher.setImages((List<Images>) JavaOriginal);
		return this.service.addRecomGif(recommended);
	}
	
	@DeleteMapping("/deleteRecomGif/{recomId}")
	public void deleteRecomGif(@PathVariable String recomId) {
		this.service.deleteRecomGif(recomId);
	}
	
	@GetMapping("/get/{recommendedBy}")
	public List<Recommended> getRecommendedBy(@PathVariable String recommendedBy){
		return this.service.getRecommendedBy(recommendedBy);
	}
}
