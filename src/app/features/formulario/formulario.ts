import { Component, inject, OnInit, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Usuario, UsuarioServices } from '../../services/usuario-services';
import { AuthService } from '../../services/auth-services';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario implements OnInit {

  private servicioUsuario = inject(UsuarioServices);

  public servicioAuth = inject(AuthService);

  listaUsuarios = signal<Usuario[]>([]);

  editando = false;

  nuevoUsuario: Usuario = {
    
    name: '',
    email: '',
    phone: '',
    password:'',
    rol: 'USUARIO'
    
  };

  ngOnInit():void {
    this.obtenerUsuarios();
  }

  //Metodo obtenerUsuarios
  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(usuarios => {
      this.listaUsuarios.set(usuarios);
    });
  }

  //MetodoGuardar
  guardarUsuario() {
    if (this.editando && this.nuevoUsuario.id) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    }
    else {
      this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      })
    }
  }

  //Metodo Eliminar
  eliminarUsuario(id: string) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.listaUsuarios.set(this.listaUsuarios().filter(u => u.id !== id));
      })
    }
  }

  //Metodo para poner los datos seleccionados en el formulario
  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  resetear() {
    this.editando = false;
    this.nuevoUsuario = { name: '', email: '', phone: '' , password:'', rol: 'USUARIO'}
  }

  /*guardarUsuario() {

    this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(respuesta => {
      //...Spread Operator: combina el nuevo usuario con la lista Usuarios                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      this.listaUsuarios.set([respuesta, ...this.listaUsuarios()]);
      //limpiar el form
      this.nuevoUsuario = { name: '', email: '', phone: '' };
    })
  }*/

}
