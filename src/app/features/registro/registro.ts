import { Component, inject, signal } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { UsuarioServices } from '../../services/usuario-services';
import { Formulario } from "../formulario/formulario";

@Component({
  selector: 'app-registro',
  imports: [Hero, Formulario],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {


}
