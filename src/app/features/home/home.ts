import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Services } from "../../shared/services/services";
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
