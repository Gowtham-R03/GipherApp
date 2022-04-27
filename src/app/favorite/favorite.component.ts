import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GipherModel } from '../model/gipher-model';
import { DataServiceService } from '../services/data-service.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  gifs:any[]= [];
  newGifs:any[]=[];
  gifModel: GipherModel = new GipherModel();
  public kod: any;
  public userInfo:any;
  public id:any;
  totalLength:any;
  page:number=1;

  constructor(private dataService:DataServiceService, private sharedData:ShareDataService,
    private router:Router) { }

  ngOnInit(): void {
   this.getAllGifs();
  setInterval(()=> { this.updateGifs() }, 0.01 * 1000);
  }

  getAllGifs(){
    this.userInfo = this.sharedData.getUser();
    this.id = this.userInfo.userId;
    console.log(this.id);
    this.dataService.getFavoritedBy(this.id).subscribe((response:any)=>{this.gifs=response;this.totalLength=response.length;});
  }

  updateGifs(){
   
    for(var i of this.gifs){
      // this.gifModel.gipherId=i.gipherId;
      // this.gifModel.images=JSON.parse(i.images);
      // this.gifModel.title=i.title;
      // this.gifModel.url=i.url;
      // this.gifModel.userId=i.userId;
      // this.newGifs.push(this.gifModel);
      // this.gifModel = new GipherModel();
      i.images = JSON.parse(i.images);
    }   
    // this.kod = this.sharedData.getGif();
    // console.log(this.kod);
    // if(this.kod=='true'){
    //   this.getAllGifs();
    // };
    
  }

  updateAgain(){
    this.getAllGifs();
    // this.kod = this.sharedData.getGif();
    // console.log(this.kod);

    // this.gifModel.gipherId = this.kod.id;
    // this.gifModel.url = this.kod.url;
    // this.gifModel.userId = this.kod.username;
    // this.gifModel.title = this.kod.title;
    // this.gifModel.images = JSON.stringify(this.kod.images);
    // this.dataService.addFavGiphers(this.gifModel).subscribe((response:any)=>{console.log(response.data)});
    // //this.gifs.push(this.gifModel);
    // this.gifModel = new GipherModel();
    // this.kod= this.sharedData.setGif(" ");
    
  }

  onUnrecommended(gif:any){
    this.dataService.deleteFavGifs(gif.gipherId).subscribe(res=>{
      alert("Gifs Details Deleted");
      this.getAllGifs();
    })
  
  }

  myFunction(gif:any){
    this.sharedData.setGif(gif)
    this.router.navigate(['comment'])
  }

}
