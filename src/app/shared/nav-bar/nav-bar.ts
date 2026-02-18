
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from "../../services/auth-services";

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink,
    RouterModule],

  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  private servicioAuth = inject(AuthService);

  cerrarSesion() {
    this.servicioAuth.logout();
    alert('Sesión cerrada correctamente');
  }
}
