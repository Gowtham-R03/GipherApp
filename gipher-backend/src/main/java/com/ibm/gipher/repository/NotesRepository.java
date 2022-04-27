package com.ibm.gipher.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.gipher.model.Notes;


@Repository
public interface NotesRepository extends JpaRepository<Notes, Integer>{

	public List<Notes> findByGipherId(String gipherId);
	
	public void deleteById(int id);

}
