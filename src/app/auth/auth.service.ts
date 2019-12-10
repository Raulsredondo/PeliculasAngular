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
  console.log(this.afAuth.auth.currentUser.uid);
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
            .then(() => {
              this.router.navigate(['/peliculas']);
            });
        })
        .catch( error => {
          this.eventAuthError.next(error);
        });
    }

      insertUserData(userCredential: firebase.auth.UserCredential){
        return this.db.doc(`Users/${userCredential.user.uid}`).set({
          email:   this.newUser.email,
          firstname: this.newUser.firstName,
          lastname: this.newUser.lastName,
          role: 'usuario'
        })
      }





      logout() {
        return this.afAuth.auth.signOut();
      }

    }

