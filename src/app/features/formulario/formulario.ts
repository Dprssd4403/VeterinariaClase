import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioServices } from '../../services/usuario-services';
import { AuthService } from '../../services/auth-services';
import { Usuario } from '../../models/usuarios';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  private servicioUsuario = inject(UsuarioServices);
  public servicioAuth = inject(AuthService);
  private router = inject(Router);

  listaUsuarios = signal<Usuario[]>([]);
  editando = false;

  nuevoUsuario: Usuario = {
    nombre: '',
    email: '',
    password: '',
    rol: 'ROLE_VETERINARIO'
  };

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(usuarios => {
      this.listaUsuarios.set(usuarios);
    });
  }

  guardarUsuario() {

    if (this.editando && this.nuevoUsuario.id) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    } else {
      this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    }
  }


  eliminarUsuario(id: number) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.listaUsuarios.set(this.listaUsuarios().filter(u => u.id !== id));
      });
    }
  }

  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  resetear() {
    this.editando = false;
    this.nuevoUsuario = {
      nombre: '',
      email: '',
      password: '',
      rol: 'ROLE_VETERINARIO'
    };
  }

  permiteSalir(): boolean {
    const hayDatosIntroducidos =
      (this.nuevoUsuario.nombre?.trim() ?? '') !== '' ||
      (this.nuevoUsuario.email?.trim() ?? '') !== '';

    if (this.editando || hayDatosIntroducidos) {
      return confirm('Tienes cambios sin guardar en el formulario. ¿Deseas salir de todas formas?');
    }

    return true;
  }
}