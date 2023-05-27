import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getMovieDetails(mediaType:string, id:string ):Observable<any>
  {
      return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }

  getMovieSimilar(mediaType:string, id:string ):Observable<any>
  {
      return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`)
  }

  getTrending(mediaType:string):Observable<any>
  {
      return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  
  getTvPopulor():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
}
