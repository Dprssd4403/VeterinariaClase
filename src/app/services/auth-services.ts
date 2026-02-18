import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {

  usuario: User | null = null;

  private auth = getAuth();

  constructor() { }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(respuesta => this.usuario = respuesta.user)
      .catch(err => console.error('No puede iniciar sesión', err.message));
  }

  registrar(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    signOut(this.auth);
    this.usuario = null;
  }
}