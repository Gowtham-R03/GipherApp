import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  gif:any;
  user:User = new User();
  comment:any;
  constructor() { }

  setGif(data:any){
    this.gif=data;
  }

  getGif(){
    return this.gif;
  }

  setUser(data:any){
    this.user.userId=data;
  }

  getUser(){
    return this.user;
  }

  setComment(data:any){
    this.comment=data;
  }

  getComment(){
    return this.comment;
  }
}
