import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',
  styleUrls: ['./pelicula-tarjeta.component.css']
})
export class PeliculaTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() peliculaSeleccionada: EventEmitter<number>;

  constructor(private router: Router) {
    this.peliculaSeleccionada = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    // console.log(  this.index );
    this.router.navigate( ['/heroe', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }

}