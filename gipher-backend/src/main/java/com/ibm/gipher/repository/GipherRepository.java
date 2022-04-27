package com.ibm.gipher.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.gipher.model.Gipher;

@Repository
public interface GipherRepository extends JpaRepository<Gipher, String>{
	
	public List<Gipher> findByFavoritedBy(String favoritedBy);

}
