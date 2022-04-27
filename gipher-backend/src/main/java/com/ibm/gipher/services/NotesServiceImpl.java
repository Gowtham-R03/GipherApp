package com.ibm.gipher.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.gipher.model.Notes;
import com.ibm.gipher.repository.NotesRepository;

@Service
public class NotesServiceImpl implements NotesService {
	
	@Autowired
	private NotesRepository repository;
	
	public List<Notes> getAllNotes(){
		return this.repository.findAll();
	}
	
	public Notes addNote(Notes note) {
		return this.repository.save(note);
	}

	@Override
	public List<Notes> getNoteById(String gipherId) {
		// TODO Auto-generated method stub
		return this.repository.findByGipherId(gipherId);
	}

	@Override
	public void deleteById(int id) {
		 this.repository.deleteById(id);
		
	}
	
	public Notes updateNote(Notes note) {
		return this.repository.save(note);
	}

}
