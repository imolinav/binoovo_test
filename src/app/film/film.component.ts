import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film;
  id;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  /* Connection via the apiService component's function getFilm(id) to the node server and data retrieval */
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.apiService.getFilm(this.id).subscribe((data) => {
      console.log(data);
      this.film = data;
    });
  }
}
