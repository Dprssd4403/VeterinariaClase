import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  subtitulo: string = "Cuidamos a los que mas quieres con servicios de calidad";
  servicioSeleccionado: string = "Ninguno";

  servicios = [
    {
      id: 1,
      nombre: "Consulta General",
      descripcion: "Evaluacion de tu mascota",
      imagen: "https://escuelafarmacia.com/wp-content/uploads/cl%C3%ADnica-veterinaria.jpg",
      activo: true
    },
    {
      id: 2,
      nombre: "Cirugia",
      descripcion: "El cuidado de tu mascota con el mejor cirugano",
      imagen: "https://mtvetmedicon.com/wp-content/uploads/2024/05/Imagenes-protegidas-por-derechos-de-autor-1.png",
      activo: true
    },
    {
      id: 3,
      nombre: "Estética",
      descripcion: "El cuidado de la imagen de tu mascota es primordial",
      imagen: "https://www.aprendemas.com/es/blog/images/2022/07/peluqueria_canina.jpg",
      activo: false
    },
  ];

  serviciosFiltrados = [...this.servicios];

  seleccionar(nombre: string) {
    this.servicioSeleccionado = nombre;
    console.log('Seleccionado:', nombre);
  }

  busqueda(event: Event) {
    const input = event.target as HTMLInputElement;
    const valor = input.value.toLowerCase();

    if (valor === '') {
      this.subtitulo = "Cuidamos a los que más quieres con servicios de calidad";
    } else {
      this.subtitulo = `Resultados para: ${valor}`;
    }

    this.serviciosFiltrados = this.servicios.filter(s =>
      s.nombre.toLowerCase().includes(valor)
    );
  }
}