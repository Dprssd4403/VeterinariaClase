import { Component, inject } from '@angular/core';
import { AuthServices } from '../../services/auth-services';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  private servicioAuth = inject(AuthServices);

  private router = inject(Router);

  iniciarSesion() {
    this.servicioAuth.login(this.email, this.password).subscribe(success => {
      if (success) {
        alert('Bienvenidos al sistema');
        this.router.navigate(['/mascotas']);
      }else{
        alert('Error: usuario no autenticado');
      }
    });
  }

  cerrarSesion() {
    this.servicioAuth.logout();
  }
}
