
import { Component, OnInit} from '@angular/core';
import { NavBar } from "./shared/nav-bar/nav-bar";
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from "@angular/router";
import { Footer } from "./shared/footer/footer";

@Component({
  selector: 'app-root',

  imports: [NavBar, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  ngOnInit(): void {
      initFlowbite();
    }
  }


