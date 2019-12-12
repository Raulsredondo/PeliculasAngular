import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { PeliculasService } from '../../services/peliculas.service';
import { PeliculaModel } from '../../models/pelicula.model';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent{

fav: Boolean;
peliId:string;

pelicula: PeliculaModel = new PeliculaModel();


  constructor( private activatedRoute: ActivatedRoute,
              private _peliculasService: PeliculasService,
              private route:ActivatedRoute){


                this.peliId=this.route.snapshot.params['id'];

    this.activatedRoute.params.subscribe( params =>{
    this._peliculasService.getPelicula( params['id'] ).subscribe(res => {this.pelicula = res})
        // console.log(this.heroe);
    });
  }


  addFav(){
    this._peliculasService.uddateFav( this.pelicula );
    console.log(this.pelicula);
  }
  deleteFav(){
    this._peliculasService.removefav(this.peliId)
    console.log(this.peliId);

  }

  guardar(fav: Boolean ) {


    this.pelicula.id = this.activatedRoute.snapshot.params.id;
    console.log(this.pelicula.id);
    console.log(this.pelicula);
    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',

      allowOutsideClick: false
    });
    Swal.showLoading();


    let peticion: Observable<any>;
    console.log(fav)

      peticion = this._peliculasService.actualizarPelicula( this.pelicula, fav);
     


    

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.pelicula.nombre,
        text: 'Se actualizó correctamente',

      });

    });



  }

}




