import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _movieService:MoviesService ) {}

  term:string='';
  peopleData:any[] = [];
  ngOnInit(): void {

    this._movieService.getTrending('person').subscribe({
      next:(data)=> this.peopleData = data.results
    })
  }

}

