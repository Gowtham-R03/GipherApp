import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  getAllNotes():Observable<Note[]>{
    return this.http.get<Note[]>('http://localhost:8080/notes/get');
  }

  addNote(note:Note){
    return this.http.post('http://localhost:8080/notes/addNote',note);
  }

  getNoteById(gipherId:any){
    return this.http.get<any>(`http://localhost:8080/notes/get/${gipherId}`)
  }

  updateNote(note:Note){
    return this.http.put('http://localhost:8080/notes/update',note);
  }
  
  deleteById(id:any){
    return this.http.delete<any>(`http://localhost:8080/notes/delete/${id}`)
  }

}
