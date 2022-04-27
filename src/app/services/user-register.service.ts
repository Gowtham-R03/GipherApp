import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<any>('http://localhost:8080/users/getUsers');
  }

  addUsers(user:User){
    return this.http.post<any>('http://localhost:8080/users/addUser',user);
  }

  findByUserId(id:any){
    return this.http.get<any>(`http://localhost:8080/users/getUser/${id}`);
  }

  updateUser(user:User){
    return this.http.put<any>(`http://localhost:8080/users/updateUser`,user);
  }

  deleteUser(id:any){
    return this.http.delete<any>(`http://localhost:8080/users/deleteUser/${id}`)
  }

  uploadUserImage(uploadImageData:any){
    return this.http.post<any>('http://localhost:8080/images/upload',uploadImageData);
  }

  getUserImage(id:any){
    return this.http.get<any>(`http://localhost:8080/images/get/${id}`)
  }


}
