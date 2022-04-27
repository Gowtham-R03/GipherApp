package com.ibm.gipher.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ibm.gipher.model.ImageModel;
import com.ibm.gipher.services.ImgaeModelService;

@RestController
@RequestMapping("/images")

public class ImageController {
	
	@Autowired
	private ImgaeModelService service;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/upload")
	public BodyBuilder uplaodImage(@RequestParam("imageFile") MultipartFile file) throws IOException {

		System.out.println("Original Image Byte Size - " + file.getBytes().length);
		ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(),
				file.getBytes().toString());
		service.uploadImage(img);
		return ResponseEntity.status(HttpStatus.OK);
	}

	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path = { "/get/{id}" })
	public ImageModel getImage(@PathVariable("id") String id) throws IOException {

		final Optional<ImageModel> retrievedImage = service.findById(Long.parseLong(id));
		ImageModel img = new ImageModel(retrievedImage.get().getName(), retrievedImage.get().getType(),
				retrievedImage.get().getPicByte());
		return img;
	}
	
	
	
	

}
