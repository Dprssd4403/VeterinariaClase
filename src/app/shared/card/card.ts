import { Component, Input } from '@angular/core';


export interface CardValor {
  titulo: string;
  descripcion: string;
  imagen: string;
  colorIcono?: string;
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() valores: CardValor[] = [];

}
