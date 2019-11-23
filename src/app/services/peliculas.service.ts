import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeliculaModel } from '../models/Pelicula.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url = 'https://angular-firebase-heroes-69575.firebaseio.com/';


  constructor( private http: HttpClient ) { }


  crearPelicula( pelicula: PeliculaModel ) {

    return this.http.post(`${ this.url }/heroes.json`, pelicula)
            .pipe(
              map( (resp: any) => {
                pelicula.id = resp.name;
                return pelicula;
              })
            );

  }

  actualizarPelicula( pelicula: PeliculaModel ) {

    const heroeTemp = {
      ...pelicula
    };

    delete heroeTemp.id;

    return this.http.put(`${ this.url }/heroes/${ pelicula.id }.json`, heroeTemp);


  }

  borrarPelicula( id: string ) {

    return this.http.delete(`${ this.url }/heroes/${ id }.json`);

  }


  getPelicula( id: string ) {

    return this.http.get(`${ this.url }/heroes/${ id }.json`);

  }


  getPeliculas() {
    return this.http.get(`${ this.url }/heroes.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }

  private crearArreglo( peliculasObj: object ) {

    const peliculas: PeliculaModel[] = [];

    Object.keys( peliculasObj ).forEach( key => {

      const pelicula: PeliculaModel = peliculasObj[key];
      pelicula.id = key;

      peliculas.push( pelicula );
    });


    return peliculas;

  }


}
