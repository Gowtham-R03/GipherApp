import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GipherModel } from '../model/gipher-model';
import { DataServiceService } from '../services/data-service.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  gifModel: GipherModel = new GipherModel();
  gifs:any[]= [];

  totalLength:any;
  page:number=1;
 
  subscription: Subscription | undefined;
  div1:boolean=false;
  sgif:any;
  public kod: any;
  public userInfo:any;
  comment:string = 'false';

  constructor(private dataService:DataServiceService, private sharedData:ShareDataService, 
    private router:Router) { }
  

  ngOnInit(): any {
    
    this.getGifs();  
  }


  getGifs(){
    this.dataService.getTrending().subscribe((response:any)=>{this.gifs=response.data;console.log(response.data);
    this.totalLength=response.length;});
  }

  onRecommended(gif:any){
    this.comment = this.sharedData.getComment();
    if(this.comment=='true'){
    this.userInfo = this.sharedData.getUser();
    this.gifModel.gipherId = gif.id;
    this.gifModel.url = gif.url;
    this.gifModel.userId = gif.username;
    this.gifModel.title = gif.title;
    this.gifModel.images = JSON.stringify(gif.images);
    this.gifModel.recommendedBy = this.userInfo.userId;
    this.dataService.addRecomGifs(this.gifModel).subscribe((response:any)=>{console.log(response.data);alert("Gif added to recommended");});
    }else{
      alert("You need to Login to add recommended")
    }
  }

  onFavorite(gif:any){

    this.comment = this.sharedData.getComment();
    if(this.comment=='true'){
    this.userInfo = this.sharedData.getUser();
    this.gifModel.gipherId = gif.id;
    this.gifModel.url = gif.url;
    this.gifModel.userId = gif.username;
    this.gifModel.title = gif.title;
    this.gifModel.images = JSON.stringify(gif.images);
    this.gifModel.favoritedBy = this.userInfo.userId;
    this.dataService.addFavGiphers(this.gifModel).subscribe((response:any)=>{console.log(response.data);alert("Gif added to favorite");});}
    else{
      alert("You need to Login to add favorite")
    }
    //this.gifs.push(this.gifModel)
   }

  myFunction(gif:any){
    this.sharedData.setGif(gif)
    this.router.navigate(['comment'])
  }

}
