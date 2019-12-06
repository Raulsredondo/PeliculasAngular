import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',
  styleUrls: ['./pelicula-tarjeta.component.css']
})
export class PeliculaTarjetaComponent implements OnInit {

  @Input() pelicula: any = {};
  @Input() index: number;

  @Output() peliculaSeleccionada: EventEmitter<number>;
  user: firebase.User;
  constructor(private router: Router, private auth: AuthService) {
    this.peliculaSeleccionada = new EventEmitter();
  }

  ngOnInit() {
  }

  verPelicula() {
    // console.log(  this.index );
    this.router.navigate( ['/pelicula', this.pelicula.id] );
    // this.heroeSeleccionado.emit( this.index );
  }

}