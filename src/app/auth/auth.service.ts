import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { UsuarioModel } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  hola: string = '/peliculasTabla';
  private url = 'https://angular-ioninc.firebaseio.com/';

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;

  constructor(private afAuth: AngularFireAuth,
    private  db: AngularFirestore,
    private router: Router,
    private http: HttpClient ) { }


    getUserState(){
      return this.afAuth.authState;
    }

    login(email: string, password: string){
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .catch(error => {
        this.eventAuthError.next(error)
      })
      .then(userCredential => {
if(userCredential){
  this.router.navigate(['/peliculasTabla'])
}
      })
    }

    createUser(user) {
      console.log(user);
      this.afAuth.auth.createUserWithEmailAndPassword( user.email, user.password)
        .then( userCredential => {
          this.newUser = user;
          console.log(userCredential);
          userCredential.user.updateProfile( {
            displayName: user.firstName + ' ' + user.lastName
          });
  
          this.insertUserData(userCredential)
        })
        .catch( error => {
          this.eventAuthError.next(error);
        });
    }

    

      insertUserData( userCredential: firebase.auth.UserCredential ) {
       const usuario: UsuarioModel = new UsuarioModel

    return this.http.post(`${ this.url }/usuarios.json`, usuario)
            .pipe(
              map( (resp: any) => {
                usuario.id = resp.userCredential.user.uid;
                usuario.email = this.newUser.email;
                usuario.firstname = this.newUser.firstName;
                usuario.lastname = this.newUser.lastName;
                usuario.role = 'usuario';
                return usuario;
              })
            );

  }



      logout() {
        return this.afAuth.auth.signOut();
      }

    }

