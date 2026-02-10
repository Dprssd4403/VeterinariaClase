import { Component, inject, signal } from '@angular/core';
import { Usuario } from '../../models/usuarios';
import { UsuarioServices } from '../../services/usuario-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  private servicioUsuario = inject(UsuarioServices);

  listaUsuarios = signal<Usuario[]>([]);

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    curso: '',
    fecha: ''
  };

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {

    this.servicioUsuario.getUsuarios().subscribe({
      next: (usuarios) => {
        this.listaUsuarios.set(usuarios);
      },
      error: (err) => console.error('Error al cargar alumnos:', err)
    });
  }


  guardarUsuario() {
    const registroParaEnviar = {
      ...this.nuevoUsuario,
      fecha: new Date().toLocaleDateString()
    };

    this.servicioUsuario.postUsuario(registroParaEnviar).subscribe({
      next: (respuesta) => {

        this.listaUsuarios.set([{ ...respuesta, fecha: registroParaEnviar.fecha }, ...this.listaUsuarios()]);

        this.nuevoUsuario = { name: '', email: '', phone: '', curso: '', fecha: '' };
      },
      error: (err) => console.error("Error al registrar:", err)
    });
  }
}
