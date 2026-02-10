import { Component, inject, signal } from '@angular/core';
import { MascotasServices } from '../../services/mascotas-services';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-mascotas',
  imports: [],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {

  private mascotaServicio = inject(MascotasServices);

  mascotas = signal<Pet[]>([]);

  ngOnInit(){
    this.mascotaServicio.getMascotas().subscribe(datos =>{
      this.mascotas.set(datos.data);
    });
  }

}
