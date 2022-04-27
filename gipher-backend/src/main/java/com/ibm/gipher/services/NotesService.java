package com.ibm.gipher.services;

import java.util.List;
import java.util.Optional;

import com.ibm.gipher.model.Notes;

public interface NotesService {
	public List<Notes> getAllNotes();
	public Notes addNote(Notes note);
	public List<Notes> getNoteById(String gipherId);
	public void deleteById(int id);
	public Notes updateNote(Notes note);

}
