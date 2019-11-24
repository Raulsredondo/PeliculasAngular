import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { PeliculaModel } from '../../models/pelicula.model';
import { PeliculasService } from '../../services/peliculas.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  pelicula: PeliculaModel = new PeliculaModel();


  constructor( private peliculasService: PeliculasService,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.peliculasService.getPelicula( id )
        .subscribe( (resp: PeliculaModel) => {
          this.pelicula = resp;
          this.pelicula.id = id;
        });

    }

  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',

      allowOutsideClick: false
    });
    Swal.showLoading();


    let peticion: Observable<any>;

    if ( this.pelicula.id ) {
      peticion = this.peliculasService.actualizarPelicula( this.pelicula );
    } else {
      peticion = this.peliculasService.crearPelicula( this.pelicula );
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.pelicula.nombre,
        text: 'Se actualizó correctamente',

      });

    });



  }

}
