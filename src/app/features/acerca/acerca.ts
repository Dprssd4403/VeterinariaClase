import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Card } from "../../shared/card/card";
import { Detallesdoctores } from "../../shared/detalles-doctores/detalles-doctores";

export interface CardValor {
  titulo: string;
  descripcion: string;
  imagen: string;
}

export interface Doctores {
  nombre: string;
  especialidad: string;
  foto: string;
  descripcion: string;
  activo: boolean;

}

@Component({
  selector: 'app-acerca',
  imports: [Hero, Card, Detallesdoctores],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {

  valores: CardValor[] = [
    {
      titulo: 'Compromiso con la Salud',
      descripcion: 'Nuestra prioridad absoluta es el bienestar integral de cada mascota.',
      imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400'
    },
    {
      titulo: 'Excelencia Médica',
      descripcion: 'Tecnología de vanguardia y formación continua para los mejores diagnósticos.',
      imagen: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400'
    },
    {
      titulo: 'Trato Humano',
      descripcion: 'Entendemos el vínculo especial, brindando empatía y respeto.',
      imagen: 'https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=400'
    },
    {
      titulo: 'Disponibilidad 24/7',
      descripcion: 'Equipo siempre listo para atender emergencias en cualquier momento.',
      imagen: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=400'
    }
  ];

  doctores: Doctores[] = [
    {
      nombre: 'Dr. Mateo Rivadeneira',
      especialidad: 'Cirujano Principal',
      foto: 'https://pae.ec/wp-content/uploads/2021/11/programas-servicio-medico-veterinario-26.jpg',
      descripcion: 'Especialista en cirugía de alta complejidad con más de 12 años de trayectoria. Su precisión y calma en el quirófano han salvado cientos de vidas críticas.',
      activo: true
    },
    {
      nombre: 'Dr. Carlos Mendoza',
      especialidad: 'Cardiólogo Veterinario',
      foto: 'https://media.istockphoto.com/id/2102632990/es/foto/m%C3%A9dico-veterinario-de-hombre-feliz-en-uniforme-azul-abrazando-al-perro-corgi-gal%C3%A9s-de-pembroke.jpg?s=612x612&w=0&k=20&c=R2MbHGmhjU2o9mW7uYqIoUViJjBLCw8e6oNATSuxZms=',
      descripcion: 'Dedicado al estudio del corazón animal. Se destaca por su paciencia y por utilizar tecnología de diagnóstico avanzada para mejorar la calidad de vida de sus pacientes.',
      activo: true
    },
    {
      nombre: 'Dra. Ana Pérez',
      especialidad: 'Nutrición y Bienestar',
      foto: 'https://www.plazacumbaya.ec/wp-content/uploads/2019/06/dr-hurtado-veterinario.jpg',
      descripcion: 'Experta en medicina preventiva y dietas terapéuticas. Cree firmemente que una buena alimentación es la base de una vida larga y feliz para nuestras mascotas.',
      activo: true
    },
    {
      nombre: 'Dr. Julián Soria',
      especialidad: 'Dermatología',
      foto: 'https://www.quitoinforma.gob.ec/wp-content/uploads/2021/10/Dia-del-veterinario.jpg',
      descripcion: 'Apasionado por el tratamiento de alergias y afecciones de la piel. Su enfoque busca no solo curar el síntoma, sino devolverle la comodidad y alegría al paciente.',
      activo: true
    }
  ];
}
