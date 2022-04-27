import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GipherModel } from '../model/gipher-model';
import { DataServiceService } from '../services/data-service.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-my-recommendations',
  templateUrl: './my-recommendations.component.html',
  styleUrls: ['./my-recommendations.component.css']
})
export class MyRecommendationsComponent implements OnInit {

 
 
  
  gifModel: GipherModel = new GipherModel();
  gifs:any[]= [];
  newGifs:any[]=[];
 
  subscription: Subscription | undefined;
  div1:boolean=false;
  sgif:any;
  public kod: any;
  public userInfo:any;
  public id:any;

  totalLength:any;
  page:number=1;
  

  constructor(private dataService:DataServiceService, private sharedData:ShareDataService,
    private router:Router) { }
  

  ngOnInit(): any {
    
    this.getGifs();
    setInterval(()=> { this.updateGifs() }, 0.01 * 1000);
   
  }


  getGifs(){
    this.userInfo = this.sharedData.getUser();
    this.id = this.userInfo.userId;
    console.log(this.id);
    this.dataService.getRecommendedBy(this.id).subscribe((response:any)=>{this.gifs=response;
      this.totalLength=response.length;});
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

    
  }

  // search(searchTerm:String){
  //   this.div1=true;
  //   // this.parentName=searchTerm;
  //   if(searchTerm !== ''){
  //   this.dataService.searchGifs(searchTerm).subscribe((response:any)=>{this.searchGifs=response.data})
  //   }
  // }

  // ngOnDestroy(): void {
  //   this.subscription?.unsubscribe();
  // }
  onUnrecommended(gif:any){
    this.dataService.deleteRecomGifs(gif.gipherId).subscribe(res=>{
      alert("Gifs Details Deleted");
      this.getGifs();
    })
    

  }

  onRecommended(){
    this.getGifs();
    // this.kod = this.sharedData.getGif();
    // console.log(this.kod);

    // this.gifModel.gipherId = this.kod.id;
    // this.gifModel.url = this.kod.url;
    // this.gifModel.userId = this.kod.username;
    // this.gifModel.title = this.kod.title;
    // this.gifModel.images = JSON.stringify(this.kod.images);
    // this.dataService.addRecomGifs(this.gifModel).subscribe((response:any)=>{console.log(response.data)});
    // this.gifModel = new GipherModel();
    // this.kod= this.sharedData.setGif(" ");

    // for(var i of this.gifs){
    //   console.log(i);
    // }
    // this.kod = this.sharedData.getGif();
    // console.log(this.kod);

    // this.gifModel.gipherId = this.kod.id;
    // this.gifModel.url = this.kod.url;
    // this.gifModel.userId = this.kod.username;
    // this.gifModel.title = this.kod.title;
    // this.gifModel.images = JSON.stringify(this.kod.images);
    // this.gifModel.images = JSON.parse(this.gifModel.images);
    // console.log(this.gifModel); 
    // console.log(this.gifs);
    // this.gifModel.images.original = JSON.stringify(this.kod.images.original);
    // this.gifModel.images.downsized = JSON.stringify(this.kod.images.downsized);
    // this.gifModel.images = JSON.parse(this.gifModel.images);
    // console.log(this.gifModel);

    

    // this.gifModel.images.preview = this.kod.images.preview;
    // this.gifModel.images.downsized = this.kod.images.downsized;
    // this.gifModel.images.original_still = this.kod.images.original_still;
    // this.gifModel.images.original_mp4 = this.kod.images.original_mp4;
    // this.gifModel.images.preview_gif = this.kod.images.preview_gif;
    // this.gifModel.images.downsized_large = this.kod.images.downsized_large;
    // this.gifModel.images.downsized_medium = this.kod.images.downsized_medium;
    // this.gifModel.images.downsized_small = this.kod.images.downsized_small;
    // this.gifModel.images.downsized_still = this.kod.images.downsized_still;
    // this.gifModel.images.fixed_height = this.kod.images.fixed_height;
    // this.gifModel.images.fixed_height_downsampled = this.kod.images.fixed_height_downsampled;
    // this.gifModel.images.fixed_height_small = this.kod.images.fixed_height_small;
    // this.gifModel.images.fixed_height_small_still = this.kod.images.fixed_height_small_still;
    // this.gifModel.images.fixed_height_still = this.kod.images.fixed_height_still;
    // this.gifModel.images.fixed_width = this.kod.images.fixed_width;
    // this.gifModel.images.fixed_width_downsampled = this.kod.images.fixed_width_downsampled;
    // this.gifModel.images.fixed_width_small = this.kod.images.fixed_width_small;
    // this.gifModel.images.fixed_width_small_still = this.kod.images.fixed_width_small_still;
    // this.gifModel.images.fixed_width_still = this.kod.images.fixed_width_still;
    // this.gifModel.images.looping = this.kod.images.looping;
    // this.gifModel.images.preview_webp = this.kod.images.preview_webp;
    // this.gifModel.images.hd = this.kod.images.hd;
    // this.gifModel.images. = this.kod.images.

  

    //this.dataService.addFavGiphers(this.gifModel).subscribe((response:any)=>{console.log(response.data)});
    
    //this.gifs.push(this.gifModel);
    // this.gifModel = new GipherModel();
    // this.kod= this.sharedData.setGif(" ");
    // console.log(JSON.parse(JSON.stringify(this.kod.images)))


    // this.gifModel.gipherId = this.kod.id;
  }

  myFunction(gif:any){
    this.sharedData.setGif(gif)
    this.router.navigate(['comment'])
  }
}
