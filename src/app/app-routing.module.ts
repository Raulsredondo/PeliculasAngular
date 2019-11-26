import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TablaPeliculasComponent } from '../app/components/tabla-peliculas/tabla-peliculas.component';
import { TablaPeliculaComponent } from '../app/components/tabla-pelicula/tabla-pelicula.component';
import { PeliculasComponent } from '../app/components/peliculas/peliculas.component';
import { PeliculaTarjetaComponent } from '../app/components/pelicula-tarjeta/pelicula-tarjeta.component';
const routes: Routes = [
  { path: 'peliculasTabla', component: TablaPeliculasComponent },
  { path: 'peliculaTabla/:id', component: TablaPeliculaComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'peliculaTarjeta', component: PeliculaTarjetaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'peliculasTabla' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
