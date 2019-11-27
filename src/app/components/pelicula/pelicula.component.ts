import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { PeliculasService } from '../../services/peliculas.service';
import { PeliculaModel } from '../../models/pelicula.model';
  import { from } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {


  pelicula: PeliculaModel[] = [];
  peliculas: PeliculaModel[] = [];
  pelicula2: any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _peliculasService: PeliculasService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this._peliculasService.getPelicula( params['id'] )
        // console.log(this.heroe);
    });

  }
  ngOnInit() {
    this._peliculasService.getPelicula('id').subscribe(res => {this.pelicula = res});
    console.log(this.pelicula2);
    console.log(this.pelicula2.nombre)

  
    // console.log( this.heroes );
  }


  

}
