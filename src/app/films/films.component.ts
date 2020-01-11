import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFilms().subscribe((data) => {
      console.log(data);
      this.films = data;
    })
  }

}
