import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Video } from "../../shared/video/video";
import { Accordion } from "../../shared/accordion/accordion";
import { Servicios} from "../../shared/services/servicios";
import { Pacientes } from "../../shared/pacientes/pacientes";

@Component({
  selector: 'app-home',
  imports: [Hero, Video, Accordion, Servicios, Pacientes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
