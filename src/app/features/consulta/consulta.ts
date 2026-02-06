import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';



@Component({
  selector: 'app-consulta',
  imports: [],
  templateUrl: './consulta.html',
  styleUrl: './consulta.css',
})
export class Consulta {

  mascotas = [
    { id: 1, nombre: "Ramon", especie: "Perro", historial: "Vacunas al dia" },
    { id: 2, nombre: "Lucky", especie: "Gato", historial: "Desparasitacion" },
    { id: 3, nombre: "Valentina", especie: "Conejo", historial: "Requiere rehabilitacion" },
  ];
  mascotaSeleccionada: Mascota | null = null;

  mensajeActivo: string = '';

  verDetalles(mascota: Mascota) {
    this.mascotaSeleccionada = mascota;
  }

  //Recibe un mensaje de componente hijo
  procesarAviso(mensaje: string) {
    this.mensajeActivo = mensaje;
  }
}


