import { Component } from '@angular/core';
import { HeroAcerca } from "../../shared/hero-acerca/hero-acerca";
import { CardAcerca } from "../../shared/card-acerca/card-acerca";
import { DoctoresAcerca } from "../../shared/doctores-acerca/doctores-acerca";

@Component({
  selector: 'app-acerca',
  imports: [HeroAcerca, CardAcerca, DoctoresAcerca],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {

}
