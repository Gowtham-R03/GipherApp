import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NotesService } from '../services/notes.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  public title:any;
  public gif:any;
  note: Note = new Note();
  notes: any[]=[];
  comment:String = 'false';
  public userInfo:any;
  likeCount:number=0;
  isLiked = false;
  // delete:boolean=false;

  constructor(private sharedData:ShareDataService, private noteService:NotesService) { 
    this.notes = [];
    this.note = new Note();
  }

  ngOnInit(): void {

    this.gif = this.sharedData.getGif();
    this.title = this.gif.title;
    this.getNotes();
    this.userInfo = this.sharedData.getUser();
    // if(this.userInfo.userId==this.note.commentedBy){
    //   this.delete=true;
    // }

    
  }
  getNotes(){
    this.noteService.getNoteById(this.gif.id || this.gif.gipherId).subscribe((response:any)=>{this.notes=response;this.note=new Note();})
   
  }



  addNote(){
    this.comment = this.sharedData.getComment();
    if(this.comment=='true'){
    if (this.note.text !== ""){
      this.note.gipherId=this.gif.id || this.gif.gipherId;
      this.userInfo = this.sharedData.getUser();
      this.note.commentedBy = this.userInfo.userId;
      this.noteService.addNote(this.note).subscribe(addednote => 
        {this.getNotes();
        this.note = new Note();})
  }else {
    alert("The text filed is required");
    }
    }else{
      alert("LogIn to Comment");
    }
}

onDelete(note:any){

  if(this.userInfo.userId==note.commentedBy){

  this.noteService.deleteById(note.id).subscribe(response=>{alert("Comment Deleted");this.getNotes();
  this.note = new Note();})
  }else{alert("Its not ur comment")}
}


  
likeTheButton = (note:any) => {
  if(this.isLiked){
  this.likeCount--;
  this.note.id=note.id;
  this.note.gipherId=note.gipherId;
  this.note.commentedBy=note.commentedBy;
  this.note.text=note.text;
  this.note.likeCount=this.likeCount;
  this.noteService.updateNote(this.note).subscribe(response=>{console.log(response)})

  }
  else
  this.likeCount++;
  this.note.id=note.id;
  this.note.gipherId=note.gipherId;
  this.note.commentedBy=note.commentedBy;
  this.note.text=note.text;
  this.note.likeCount=this.likeCount;
  this.noteService.updateNote(this.note).subscribe(response=>{console.log(response)})

  this.isLiked = !this.isLiked
}

}
