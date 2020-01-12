import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  /*Connections to the node server's endpoints*/
  public getFilms() {
    return this.httpClient.get('http://localhost:8000/api/films');
  }

  public getFilm(id) {
    return this.httpClient.get('http://localhost:8000/api/films/' + id);
  }
}
