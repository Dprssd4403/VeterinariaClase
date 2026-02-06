import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { DetalleMascota } from "../../shared/detalle-mascota/detalle-mascota";
import { Detallesdoctores } from "../../shared/detalles-doctores/detalles-doctores";

export interface Doctores {
  nombre: string;
  especialidad: string;
  foto: string;
  descripcion: string;
  activo: boolean;

}

@Component({
  selector: 'app-consulta',
  imports: [DetalleMascota, Detallesdoctores],
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
  //Gestiona el evento usado del componente hijo
  procesarAviso(mensaje: string) {
    this.mensajeActivo = mensaje;
  }

  doctores: Doctores[] = [
    {
      nombre: 'Dr. Mateo Rivadeneira',
      especialidad: 'Cirujano Principal',
      foto: 'https://pae.ec/wp-content/uploads/2021/11/programas-servicio-medico-veterinario-26.jpg',
      descripcion:"",
      activo: true
    },
    {
      nombre: 'Dr. Carlos Mendoza',
      especialidad: 'Cardiólogo Veterinario',
      foto: 'https://media.istockphoto.com/id/2102632990/es/foto/m%C3%A9dico-veterinario-de-hombre-feliz-en-uniforme-azul-abrazando-al-perro-corgi-gal%C3%A9s-de-pembroke.jpg?s=612x612&w=0&k=20&c=R2MbHGmhjU2o9mW7uYqIoUViJjBLCw8e6oNATSuxZms=',
      descripcion:"",
      activo: false
    },
    {
      nombre: 'Dra. Ana Pérez',
      especialidad: 'Nutrición y Bienestar',
      foto: 'https://www.plazacumbaya.ec/wp-content/uploads/2019/06/dr-hurtado-veterinario.jpg',
      descripcion:"",
      activo: true
    },
    {
      nombre: 'Dr. Julián Soria',
      especialidad: 'Dermatología',
      foto: 'https://www.quitoinforma.gob.ec/wp-content/uploads/2021/10/Dia-del-veterinario.jpg',
      descripcion:"",
      activo: false
    }
  ]
}


