import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LogInComponent } from './log-in/log-in.component';
import { MyRecommendationsComponent } from './my-recommendations/my-recommendations.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TrendingComponent } from './trending/trending.component';


const routes: Routes = [
  {path:'', redirectTo:'trending', pathMatch:'full'},
  {path:'my-recommendations', component:MyRecommendationsComponent},
  {path:'favorite', component:FavoriteComponent},
  {path:'dashboard', component:DashboardComponent },
  {path:'trending', component:TrendingComponent },
  {path:'comment', component:CommentComponent},
  {path:'log-in', component:LogInComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'profile', component:ProfileComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'||'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
