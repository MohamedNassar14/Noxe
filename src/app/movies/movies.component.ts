import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

constructor(private _movieService:MoviesService) {}
 term:string='';
 movieData:any[] = [];

ngOnInit(): void {

  this._movieService.getTrending('movie').subscribe({
    next:(data) => this.movieData = data.results
  })
}
}
