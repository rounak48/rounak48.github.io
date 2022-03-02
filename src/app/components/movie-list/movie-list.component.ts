import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDefaults } from 'src/app/models/defaults';
import { Movie } from 'src/app/models/movie.model';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies$ : Observable<Movie[]>;
  movieQuery:string=MovieDefaults.QUERY;
  movieType:string=MovieDefaults.TYPE;
  pageNum = 1;


  constructor(private _movieApi : MovieApiService) { }

  ngOnInit(): void {
    this.movies$ = this._movieApi.getMoviesByQuery();
  }

  searchMovies(){
    this.pageNum=1;
    this.movies$ = this.callMovieApi();
  }
  nextMovies(){
    this.pageNum++;
    this.movies$ = this.callMovieApi();
  }

  prevMovies(){
    this.pageNum--;
    this.movies$ = this.callMovieApi();
  }


  callMovieApi(){
    return this._movieApi.getMoviesByQuery(this.movieQuery,this.movieType,this.pageNum);
  }

}
