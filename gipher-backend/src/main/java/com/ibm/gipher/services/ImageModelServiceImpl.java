package com.ibm.gipher.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ibm.gipher.model.ImageModel;
import com.ibm.gipher.repository.ImageRepository;

@Service
public class ImageModelServiceImpl implements ImgaeModelService {
	
	@Autowired
	private ImageRepository repository;
	
	@Override
	public Optional<ImageModel> findById(Long id) {
		// TODO Auto-generated method stub
		return this.repository.findById(id);
	}
	
	public ImageModel uploadImage(ImageModel img) {
		return this.repository.save(img);
	}

}
