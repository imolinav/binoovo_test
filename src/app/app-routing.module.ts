import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { FilmsComponent } from './films/films.component';


const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'film/:id', component: FilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
