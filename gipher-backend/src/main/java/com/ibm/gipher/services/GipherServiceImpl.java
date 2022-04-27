package com.ibm.gipher.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.gipher.model.Gipher;
import com.ibm.gipher.repository.GipherRepository;


@Service
public class GipherServiceImpl implements GipherService {
	
	@Autowired
	private GipherRepository repository;


	public List<Gipher> getGiphers(){
		return this.repository.findAll();
	}
	
	public Gipher addGipher(Gipher gipher) {
		return this.repository.save(gipher);
	}

	@Override
	public void deleteGipher(String gipherId) {
		// TODO Auto-generated method stub
		this.repository.deleteById(gipherId);
	}

	@Override
	public List<Gipher> getFavoritedBy(String favoritedBy) {
		// TODO Auto-generated method stub
		return this.repository.findByFavoritedBy(favoritedBy);
	}
}
