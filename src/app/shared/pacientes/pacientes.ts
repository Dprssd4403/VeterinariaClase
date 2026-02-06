import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  imports: [FormsModule, CommonModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css',
})
export class Pacientes {

  nombreFiltro: string = '';

  pacientes = [
    { nombre: 'Jose', especie: 'Perro', urgencia: 'alta', recuperacion: 85 },
    { nombre: 'Lucky', especie: 'Gato', urgencia: 'baja', recuperacion: 40 },
    { nombre: 'Valentina', especie: 'Conejo', urgencia: 'media', recuperacion: 10 },
  ];
}
