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

  @Input() index: number;
pelicula: PeliculaModel = new PeliculaModel();
pelicula3: PeliculaModel[] = [];
pelicula4: any = {}



constructor( private activatedRoute: ActivatedRoute,
  private _peliculasService: PeliculasService
){

this.activatedRoute.params.subscribe( params =>{
this.pelicula2 = this._peliculasService.getPelicula( params['id'] );
// console.log(this.heroe);
});

}

    ngOnInit(){

   this.activatedRoute.params.subscribe( params =>{
    this._peliculasService.getPelicula2( params['id'] ).subscribe(res => 
      {this.pelicula3 = res})});

    //this.pelicula = this._peliculasService.getPelicula('id');
    
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this._peliculasService.getPelicula( id ).subscribe( (resp: PeliculaModel) => {
      this.pelicula = resp;
      this.pelicula.id = id;    

    //
    // console.log(this.heroe);    
    console.log(this.pelicula);
   //console.log(this.pelicula2);
    //console.log(this.pelicula3);
    console.log(this.pelicula4);
    console.log(this.pelicula4.nombre);
    });
  }


}
