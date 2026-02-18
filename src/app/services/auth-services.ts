import { inject, Injectable, signal } from '@angular/core';
import { UsuarioServices } from './usuario-services';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private servicioUsuario = inject(UsuarioServices);

  //localStorage
  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');

  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios => {
        const usuarioCoincide = usuarios.find(u => u.email === email && u.password === password);
        if (usuarioCoincide) {
          localStorage.setItem('sesion', 'true');
          //guardar estos datos convirtiendo el objeto json a texto
          localStorage.setItem('user', JSON.stringify(usuarioCoincide));
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
  }
}
