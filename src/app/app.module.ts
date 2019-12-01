import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPeliculasComponent } from './components/tabla-peliculas/tabla-peliculas.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
//Agrega estos módulos
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
//Formularios
import { ReactiveFormsModule } from '@angular/forms';
import { PeliculasService } from '../app/services/peliculas.service';
import { SubirArchivoComponent } from './components/subir-archivo/subir-archivo.component'


@NgModule({
  declarations: [
    AppComponent,
    TablaPeliculasComponent,
    TablaPeliculaComponent,
    NavbarComponent,
    PeliculasComponent,
    PeliculaTarjetaComponent,
    PeliculaComponent,
    SubirArchivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
