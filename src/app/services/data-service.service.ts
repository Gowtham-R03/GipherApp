import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GipherModel } from '../model/gipher-model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // gifs = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getTrending(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50`);
    // .subscribe((response:any)=>{this.gifs.next(response.data)});
  }

  searchGifs(gifName:String){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.giphyApiKey}&limit=24`);
    // .subscribe((response:any)=>{this.gifs.next(response.data)});
  }

  // getGifById(gifId:String){
  //   return this.http.get(`https://api.giphy.com/v1/gifs/${gifId}&api_key=${environment.giphyApiKey}`)
  // }

  // getGif(){
  //   return this.gifs.asObservable();
  // }

  getFavGifs():Observable<GipherModel[]>{
    return this.http.get<GipherModel[]>('http://localhost:8080/giphers/get');
  }

  addFavGiphers(gipher:GipherModel){
    return this.http.post<GipherModel>('http://localhost:8080/giphers/addGiphers',gipher);

  }

  getFavoritedBy(favoritedBy:any){
    return this.http.get<any>(`http://localhost:8080/giphers/get/${favoritedBy}`)
  }

  getRecomGifs():Observable<GipherModel[]>{
    return this.http.get<GipherModel[]>('http://localhost:8080/recommended/get');
  }

  addRecomGifs(gipher:GipherModel){
    return this.http.post<GipherModel>('http://localhost:8080/recommended/addRecomGif',gipher);

  }

  getRecommendedBy(recommendedBy:any){
    return this.http.get<any>(`http://localhost:8080/recommended/get/${recommendedBy}`)
  }

  deleteFavGifs(gipherId:any){
    return this.http.delete<any>(`http://localhost:8080/giphers/deleteGipher/${gipherId}`)
  }

  deleteRecomGifs(gipherId:any){
    return this.http.delete<any>(`http://localhost:8080/recommended/deleteRecomGif/${gipherId}`)
  }

  

}
