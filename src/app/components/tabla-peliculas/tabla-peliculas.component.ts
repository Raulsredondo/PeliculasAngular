import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { PeliculaModel } from '../../models/pelicula.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {

  peliculas: PeliculaModel[] = [];
  cargando = false;


  constructor( private peliculasService: PeliculasService ) { }

  ngOnInit() {

    this.cargando = true;
    this.peliculasService.getPeliculas()
      .subscribe( resp => {
        this.peliculas = resp;
        this.cargando = false;
      });

  }

  borrarPelicula( pelicula: PeliculaModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: 'Está seguro que desea borrar a ${ pelicula.nombre }',
      showConfirmButton: true,
      showCancelButton: true,
    }).then( resp => {

      if ( resp.value ) {
        this.peliculas.splice(i, 1);
        this.peliculasService.borrarPelicula( pelicula.id ).subscribe();
      }

    });



  }


}
