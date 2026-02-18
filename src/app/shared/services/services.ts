import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  subtitulo: string = "Potencia tu carrera con nuestros cursos especializados";
  servicioSeleccionado: string = "Ninguno";

  servicios = [
    {
      id: 1,
      nombre: "Desarrollo Web con Angular",
      descripcion: "Aprende a crear aplicaciones modernas y escalables desde cero.",
      imagen: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1000&auto=format&fit=crop",
      precio: 49.99,
      activo: true
    },
    {
      id: 2,
      nombre: "Diseño de Interfaces (UI/UX)",
      descripcion: "Domina Figma y los principios de diseño para crear experiencias increíbles.",
      imagen: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop",
      precio: 29.99,
      activo: true
    },
    {
      id: 3,
      nombre: "Inteligencia Artificial Pro",
      descripcion: "Crea modelos de Machine Learning y automatiza procesos complejos.",
      imagen: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      precio: 0,
      activo: false 
    },
  ];


  serviciosFiltrados = [...this.servicios];

  seleccionar(nombre: string) {
    this.servicioSeleccionado = nombre;
    console.log('Curso seleccionado:', nombre);
  }

  busqueda(event: Event) {
    const input = event.target as HTMLInputElement;
    const valor = input.value.toLowerCase();

    if (valor === '') {
      this.subtitulo = "Potencia tu carrera con nuestros cursos especializados";
    } else {
      this.subtitulo = `Cursos encontrados para: "${valor}"`;
    }

    this.serviciosFiltrados = this.servicios.filter(s =>
      s.nombre.toLowerCase().includes(valor) || 
      s.descripcion.toLowerCase().includes(valor)
    );
  }
}