import { inject, Injectable, signal } from '@angular/core';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { UsuarioServices } from './usuario-services';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {

  private servicioUsuario = inject(UsuarioServices);

  //LocalStorage
  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');

  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios => {
        const usuarioCoincide = usuarios.find(u => u.email === email && u.password === password);
        if (usuarioCoincide) {
          localStorage.setItem('sesion', 'true');
          //guardar datos convirtiendo el objeto json a texto
          localStorage.setItem('user', JSON.stringify(usuarioCoincide));
          this.sesionIniciada.set(true);
          return true;
        }
        return false
      })
    )
  }

  /*registrar(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }*/

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    this.sesionIniciada.set(false);
  }
}