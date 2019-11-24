import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TablaPeliculasComponent } from '../app/components/tabla-peliculas/tabla-peliculas.component';
import { TablaPeliculaComponent } from '../app/components/tabla-pelicula/tabla-pelicula.component';

const routes: Routes = [
  { path: 'peliculas', component: TablaPeliculasComponent },
  { path: 'pelicula/:id', component: TablaPeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'peliculas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
