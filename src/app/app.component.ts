import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from './services/data-service.service';
import { ShareDataService } from './services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchGifs:any[] =[];
  div1:boolean=false;
  sgif:any;
  public text: string = 'Recommended';
  public parentName:any = "";

  constructor(private dataService:DataServiceService, private router:Router, private sharedData:ShareDataService) { }
  title = 'GipherApp';

  ngOnInit(): void {
  }

  search(searchTerm:String){
    this.div1=true;
    this.parentName=searchTerm;
    // this.parentName=searchTerm;
  }

  onRecommended(gif:any){
    // this.gifs.push(gif);
     
 }

 onCancle(){
  this.div1=false;
 }

 logIn(){
  this.router.navigate(['log-in'])
}

onLogOut(){
    this.sharedData.setUser(0);
    this.router.navigate(['log-in']);
}

}
