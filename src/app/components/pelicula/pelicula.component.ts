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
  peliculas: PeliculaModel;
  pelicula2: any;



  constructor( private activatedRoute: ActivatedRoute,
               private _peliculasService: PeliculasService
    ){

    this.activatedRoute.params.subscribe( params =>{
    this._peliculasService.getPelicula2( params['id'] ).subscribe(res => {this.pelicula = res})
        // console.log(this.heroe);
    });

  }
  ngOnInit() {
  this._peliculasService.getPelicula2('id');
    console.log(this._peliculasService.getPelicula2("0"));
    console.log(this._peliculasService.getPelicula("0"))

  
    // console.log( this.heroes );
  }


  

}
