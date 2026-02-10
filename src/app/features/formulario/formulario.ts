import { Component, inject, signal } from '@angular/core';
import { UsuarioServices } from '../../services/usuario-services';
import { Usuario } from '../../models/usuarios';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  private servicioUsuario = inject(UsuarioServices);

  listaUsuarios = signal<Usuario[]>([]);

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: ''
  };

  ngOnInit() {
    this.obtenerUsuarios();
  }

  //Metodo obtenerUsuarios
  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(usuarios => {
      this.listaUsuarios.set(usuarios);
    });
  }

  guardarUsuario() {

    this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(respuesta => {
      //...Spread Operator: combina el nuevo usuario con la lista Usuarios                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      this.listaUsuarios.set([respuesta, ...this.listaUsuarios()]);
      //limpiar el form
      this.nuevoUsuario = { name: '', email: '', phone: '' };
    })
  }
}
