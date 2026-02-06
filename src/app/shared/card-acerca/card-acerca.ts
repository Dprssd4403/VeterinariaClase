import { Component } from '@angular/core';

@Component({
  selector: 'app-card-acerca',
  imports: [],
  templateUrl: './card-acerca.html',
  styleUrl: './card-acerca.css',
})
export class CardAcerca {
  valores = [
    {
      titulo: 'Compromiso con la Salud',
      descripcion: 'Nuestra prioridad absoluta es el bienestar integral de cada mascota que entra por nuestra puerta.',
      imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400',
      colorIcono: 'text-green-500'
    },
    {
      titulo: 'Excelencia Médica',
      descripcion: 'Contamos con tecnología de vanguardia y formación continua para ofrecer los mejores diagnósticos.',
      imagen: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400',
      colorIcono: 'text-blue-500'
    },
    {
      titulo: 'Trato Humano',
      descripcion: 'Entendemos el vínculo especial entre humanos y mascotas, por eso brindamos empatía y respeto.',
      imagen: 'https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=400',
      colorIcono: 'text-pink-500'
    },
    {
      titulo: 'Disponibilidad 24/7',
      descripcion: 'Sabemos que las emergencias no tienen horario, por eso nuestro equipo está siempre listo para atenderte cuando más nos necesites.',
      imagen: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=400',
      colorIcono: 'text-red-500'
    }
  ];
}
