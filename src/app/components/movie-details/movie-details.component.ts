import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId:string='';
  details$:Observable<any>;

  constructor(private route:ActivatedRoute, private _movieApi : MovieApiService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];
    this.details$ = this._movieApi.getMovieById(this.movieId);
  }

}
