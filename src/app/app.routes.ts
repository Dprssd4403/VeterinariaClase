import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consulta } from './features/consulta/consulta';
import { Mascotas } from './shared/mascotas/mascotas';
import { Registro } from './features/registro/registro';
import { Contacto } from './features/contacto/contacto';

export const routes: Routes = [

    //1. Ruta Inicial
    { path: '', component: Home },
    //2. Rutas de navegacion
    { path: 'acerca', component: Acerca },
    { path: 'consulta', component: Consulta },
    { path: 'mascota', component: Mascotas},
    { path: 'registro', component: Registro},
    { path: 'contacto', component: Contacto}
    //FINAL
    //3.Redireccion si el usuario escribe una url que no existe
    //{path:'**', component:Pagina404}
];
