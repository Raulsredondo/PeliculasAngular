import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeliculaModel } from '../models/Pelicula.model';
import { map, delay } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url = 'https://angular-ioninc.firebaseio.com/';


  constructor( private http: HttpClient, private storage: AngularFireStorage) { }

    //Tarea para subir archivo
    tareaCloudStorage(nombreArchivo: string, datos: any) {
      return this.storage.upload(nombreArchivo, datos);
    }
  
    //Referencia del archivo
    referenciaCloudStorage(nombreArchivo: string) {
      return this.storage.ref(nombreArchivo);
    }

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

  getPelicula2( id: string ) {

    return this.http.get(`${ this.url }/peliculas/${ id }.json`).pipe(map( this.Arreglo ),delay(0));

  }


  getPeliculas() {
    
    return this.http.get(`${ this.url }/peliculas.json`).pipe(map( this.Arreglo ),delay(0));
  }

  buscarPeliculas( termino: string):PeliculaModel[]{

    const peliArr: PeliculaModel[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.getPeliculas.length; i ++ ){

      let heroe = this.getPeliculas[i];

      let nombre = heroe.nombre.toLowerCase();
      let bio = heroe.bio.toLowerCase();
      let ano = heroe.aparicion;

      if( nombre.indexOf( termino ) >= 0 || bio.indexOf(termino) >= 0 || ano.indexOf( termino ) >= 0 ){
        heroe.idx = i;
        peliArr.push( heroe )
      }
      
    }
    return peliArr;

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
