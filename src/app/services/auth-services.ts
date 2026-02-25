import { inject, Injectable, signal } from '@angular/core';
import { UsuarioServices } from './usuario-services';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private servicioUsuario = inject(UsuarioServices);
  private http = inject(HttpClient);

  //localStorage
  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');

  //Accedemos al rol de usuario
  rolActual = signal<string | null>(localStorage.getItem('rol'));

  private API_URL = 'http://localhost:8080/login';

  login(email: string, passw: string): Observable<boolean> {

    return this.http.post<Usuario | null>(this.API_URL, {email, password: passw}).pipe(
      map(usuarioCoincide => {
        if (usuarioCoincide) {
          localStorage.setItem('sesion', 'true');
          //guardar estos datos convirtiendo el objeto json a texto
          localStorage.setItem('user', JSON.stringify(usuarioCoincide));
          //guardar rol
          localStorage.setItem('rol', usuarioCoincide.rol);
          this.rolActual.set(usuarioCoincide.rol);
          this.sesionIniciada.set(true);


          return true;
        }
        return false;
      })
    );
  }

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    this.sesionIniciada.set(false);
    localStorage.removeItem('rol');
    this.rolActual.set(null);
  }
}
