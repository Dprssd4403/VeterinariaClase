import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css'
})
export class Accordion implements OnInit {

  constructor() {}

  ngOnInit(): void {
    initFlowbite();
  }
}