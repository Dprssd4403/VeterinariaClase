import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Formulario } from '../formulario/formulario';

@Component({
  selector: 'app-registro',
  imports: [Hero, Formulario],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

}
