import { Component, Input } from '@angular/core';

export interface Doctores {
  nombre: string;
  especialidad: string;
  foto: string;
  descripcion: string;
  activo: boolean;

}

@Component({
  selector: 'app-detalles-doctores',
  imports: [],
  templateUrl: './detalles-doctores.html',
  styleUrl: './detalles-doctores.css',
})
export class Detallesdoctores {

  @Input() titulo!: string;
  @Input() doctores: Doctores[] = [];


}
