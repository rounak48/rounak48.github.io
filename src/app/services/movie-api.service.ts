import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Movie, SearchResponse } from '../models/movie.model';
import { MovieDefaults } from '../models/defaults';
import { catchError, map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private BASE_URI = "http://www.omdbapi.com/?apikey=b9bd48a6&";

  constructor(private http:HttpClient) { }


  getMoviesByQuery(query:string=MovieDefaults.QUERY,type='',page=1):Observable<Movie[]>{
    let params = new HttpParams().set('s',query).set('page',page.toString());
    if(type && type!='all'){
      params = params.set('type',type);
    }
    return this.http.get<SearchResponse>(`${this.BASE_URI}`,{params}).pipe(
      map((res)=>{
        console.log(res.Response)
        if(res.Response==="False"){
          console.error(res.Error)
          return [];
        }
        return res.Search;
    }));
  }

  getMovieById(id:string){
    return this.http.get(`${this.BASE_URI}i=${id}`);
  }
}
