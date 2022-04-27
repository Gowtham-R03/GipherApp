package com.ibm.gipher.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.gipher.model.Recommended;
import com.ibm.gipher.repository.RecommendedRepo;


@Service
public class RecommendedServiceImpl implements RecommendedService {
	
	@Autowired
	private RecommendedRepo repository;
	
	@Override
	public List<Recommended> getRecomGif() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public Recommended addRecomGif(Recommended recommended) {
		// TODO Auto-generated method stub
		return repository.save(recommended);
	}

	@Override
	public void deleteRecomGif(String recomId) {
		// TODO Auto-generated method stub
		this.repository.deleteById(recomId);
		
	}

	@Override
	public List<Recommended> getRecommendedBy(String recommendedBy) {
		// TODO Auto-generated method stub
		return this.repository.findByRecommendedBy(recommendedBy);
	}
	
	

}
