import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeliculaModel } from '../models/Pelicula.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url = 'https://angular-ioninc.firebaseio.com/';


  constructor( private http: HttpClient ) { }


  crearPelicula( pelicula: PeliculaModel ) {

    return this.http.post(`${ this.url }/peliculas.json`, pelicula)
            .pipe(
              map( (resp: any) => {
                pelicula.id = resp.name;
                return pelicula;
              })
            );

  }

  actualizarPelicula( pelicula: PeliculaModel ) {

    const peliTemp = {
      ...pelicula
    };

    delete peliTemp.id;

    return this.http.put(`${ this.url }/peliculas/${ pelicula.id }.json`, peliTemp);


  }

  borrarPelicula( id: string ) {

    return this.http.delete(`${ this.url }/peliculas/${ id }.json`);

  }


  getPelicula( id: string ) {

    return this.http.get(`${ this.url }/peliculas/${ id }.json`);

  }


  getPeliculas() {
    
    return this.http.get(`${ this.url }/peliculas.json`).pipe(map( this.Arreglo ),delay(0));
  }

  private Arreglo( peliculasObj: object ) {

    const peliculas: PeliculaModel[] = [];

    Object.keys( peliculasObj ).forEach( key => {

      const pelicula: PeliculaModel = peliculasObj[key];
      pelicula.id = key;

      peliculas.push( pelicula );
    });


    return peliculas;

  }


}
