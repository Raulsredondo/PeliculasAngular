import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '..//../services/peliculas.service';
import { PeliculaModel } from '../../models/pelicula.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  pelicula:PeliculaModel[] = [];

  constructor( private _peliculasService:PeliculasService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
   this.pelicula = this._peliculasService.getPeliculas();

  
    // console.log( this.heroes );
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/pelicula',idx] );
  }

}