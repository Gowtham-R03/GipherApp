package com.ibm.gipher.services;

import java.util.Optional;

import com.ibm.gipher.model.ImageModel;

public interface ImgaeModelService {
	
	public Optional<ImageModel> findById(Long id);
	public ImageModel uploadImage(ImageModel img);

}
