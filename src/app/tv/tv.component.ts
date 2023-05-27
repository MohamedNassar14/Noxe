import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private _movieScrvice:MoviesService) { }

  terms:string ='';
  tvData:any = [];


  ngOnInit(): void {
    this._movieScrvice.getTvPopulor().subscribe({
      next:(data)=> this.tvData = data.results
    })
  }
}
