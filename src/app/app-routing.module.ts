import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TablaPeliculasComponent } from '../app/components/tabla-peliculas/tabla-peliculas.component';


const routes: Routes = [
  { path: 'peliculas', component: TablaPeliculasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'peliculas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
