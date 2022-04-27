import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRecommendationsComponent } from './my-recommendations/my-recommendations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchComponent } from './search/search.component';
import { TrendingComponent } from './trending/trending.component';
import { CommentComponent } from './comment/comment.component';
import { DataServiceService } from './services/data-service.service';
import { ShareDataService } from './services/share-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import {NgxPaginationModule} from 'ngx-pagination';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    MyRecommendationsComponent,
    DashboardComponent,
    FavoriteComponent,
    SearchComponent,
    TrendingComponent,
    CommentComponent,
    LogInComponent,
    SignUpComponent,
    ProfileComponent,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgxPaginationModule
  ],
  providers: [DataServiceService, ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
