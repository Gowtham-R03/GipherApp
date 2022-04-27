package com.ibm.gipher.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.gipher.model.Notes;
import com.ibm.gipher.services.NotesService;

@RestController
@RequestMapping("/notes")
@CrossOrigin(origins = "http://localhost:4200")
public class NotesController {
	
	@Autowired
	private NotesService service;
	
	@GetMapping("/get")
	public List<Notes> getAllNotes(){
		return this.service.getAllNotes();
	}
	
	@PostMapping("/addNote")
	public Notes addNote(@RequestBody Notes note) {
		return this.service.addNote(note);
	}
	
	@GetMapping("/get/{gipherId}")
	public List<Notes> getCourseTitle(@PathVariable String gipherId){
		return service.getNoteById(gipherId);
	}
	
	@PutMapping("/update")
	public Notes updateNote(@RequestBody Notes note) {
		return this.service.updateNote(note);
	}
	
	@DeleteMapping("delete/{id}")
	public void delteById(@PathVariable String id) {
		this.service.deleteById(Integer.parseInt(id));
	}
}
