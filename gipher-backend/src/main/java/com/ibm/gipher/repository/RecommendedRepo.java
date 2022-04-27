package com.ibm.gipher.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.gipher.model.Recommended;

@Repository
public interface RecommendedRepo extends JpaRepository<Recommended, String> {
	
	public List<Recommended> findByRecommendedBy(String recommendedBy);

}
