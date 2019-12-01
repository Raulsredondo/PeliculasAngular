import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { PeliculasService } from '../../services/peliculas.service';
import { PeliculaModel } from '../../models/pelicula.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent{



pelicula: PeliculaModel = new PeliculaModel();


  constructor( private activatedRoute: ActivatedRoute,
              private _peliculasService: PeliculasService){

    this.activatedRoute.params.subscribe( params =>{
    this._peliculasService.getPelicula( params['id'] ).subscribe(res => {this.pelicula = res})
        // console.log(this.heroe);
    });
  }
}


