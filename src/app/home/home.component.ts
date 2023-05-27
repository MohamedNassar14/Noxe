import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   constructor(private _MoviesServices:MoviesService) {}
    trendingMovies:any[] = [];
    trendingTv:any[] = [];
    trendingPeople:any[] = [];
    

  ngOnInit():void{
  
    this._MoviesServices.getTrending('movie').subscribe({
      next:(data)=> this.trendingMovies = data.results.slice(0,10)
    })

    this._MoviesServices.getTrending('tv').subscribe({
      next:(data)=> this.trendingTv = data.results.slice(0,10)
    })

    this._MoviesServices.getTrending('person').subscribe({
      next:(data)=> this.trendingPeople = data.results.filter((item:any)=> item.profile_path !== null ).slice(0,10)
    })

  }
}
