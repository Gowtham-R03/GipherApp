import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GipherModel } from '../model/gipher-model';
import { DataServiceService } from '../services/data-service.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() public parentData: any;
  searchGifs:any[] =[];
  public text: string = 'Recommended';
  public text1: string = 'Favorite';
  public kod: any;
  public userInfo:any;
  gifModel: GipherModel = new GipherModel();
  comment:string = 'false';
  totalLength:any;
  page:number=1;
  
  constructor(private dataService:DataServiceService, private sharedData:ShareDataService,
    private router:Router) { }

  ngOnInit(): void {
    this.dataService.searchGifs(this.parentData).subscribe((response:any)=>{this.searchGifs=response.data;
      this.totalLength=response.length;})
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
    }
    else{
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
  //this.gifs.push(this.gifModel)
  else{
    alert("You need to Login to add favorite")
  }
 }

 myFunction(gif:any){
  this.sharedData.setGif(gif)
  this.router.navigate(['comment'])
}

}
