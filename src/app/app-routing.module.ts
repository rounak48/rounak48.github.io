import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SplashComponent } from './components/splash/splash.component';

const routes: Routes = [
  {path:'',component:SplashComponent},
  {path:'list', component:MovieListComponent},
  {path:'movie/:id', component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
