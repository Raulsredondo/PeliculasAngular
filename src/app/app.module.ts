import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPeliculasComponent } from './components/tabla-peliculas/tabla-peliculas.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaPeliculasComponent,
    TablaPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
