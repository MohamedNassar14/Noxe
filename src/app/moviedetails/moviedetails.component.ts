import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  mediaType:string = '';
  movieSimilar:any[] = [];
  itemDetail:any;
  constructor(private _movieServices:MoviesService, private _activatedRoute:ActivatedRoute) { }

  
  

  ngOnInit(): void {
   let {id, media_type} = this._activatedRoute.snapshot.params;

    this.mediaType = media_type;

    this._movieServices.getMovieDetails(id, media_type).subscribe({
      next:(data)=> this.itemDetail = data
    })

    this._movieServices.getMovieSimilar(id, media_type).subscribe({
      next:(data)=> this.movieSimilar = data.results.filter((item:any)=> item.poster_path !== null).slice(0,6)
    })
    
  }


  getSimilar(id:string, media_type:string)
  {

    this._movieServices.getMovieDetails(id, media_type).subscribe({
      next:(data)=> this.itemDetail = data
    })
    
    this._movieServices.getMovieSimilar(id, media_type).subscribe({
      next:(data)=> this.movieSimilar = data.results.filter((item:any)=> item.poster_path !== null).slice(0,6)
    })
  }
}
