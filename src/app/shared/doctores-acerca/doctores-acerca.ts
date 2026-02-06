import { Component } from '@angular/core';

@Component({
  selector: 'app-doctores-acerca',
  imports: [],
  templateUrl: './doctores-acerca.html',
  styleUrl: './doctores-acerca.css',
})
export class DoctoresAcerca {

  doctores = [
    {
      nombre: 'Dr. Mateo Rivadeneira',
      especialidad: 'Cirujano Principal',
      frase: 'La precisión es clave en cada intervención.',
      foto: 'https://pae.ec/wp-content/uploads/2021/11/programas-servicio-medico-veterinario-26.jpg'
    },
    {
      nombre: 'Dr. Carlos Mendoza',
      especialidad: 'Cardiólogo Veterinario',
      frase: 'Cuidando el corazón de los que más quieres.',
      foto: 'https://media.istockphoto.com/id/2102632990/es/foto/m%C3%A9dico-veterinario-de-hombre-feliz-en-uniforme-azul-abrazando-al-perro-corgi-gal%C3%A9s-de-pembroke.jpg?s=612x612&w=0&k=20&c=R2MbHGmhjU2o9mW7uYqIoUViJjBLCw8e6oNATSuxZms='
    },
    {
      nombre: 'Dra. Ana Pérez',
      especialidad: 'Nutrición y Bienestar',
      frase: 'La buena salud empieza en el plato.',
      foto: 'https://www.plazacumbaya.ec/wp-content/uploads/2019/06/dr-hurtado-veterinario.jpg'
    },
    {
      nombre: 'Dr. Julián Soria',
      especialidad: 'Dermatología',
      frase: 'Piel sana, mascota feliz y tranquila.',
      foto: 'https://www.quitoinforma.gob.ec/wp-content/uploads/2021/10/Dia-del-veterinario.jpg'
    }
  ]
}
