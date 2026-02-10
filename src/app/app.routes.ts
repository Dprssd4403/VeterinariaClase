import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Registro } from './features/registro/registro';
import { Contacto } from './features/contacto/contacto';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'contacto', component: Contacto },
    { path: 'registro', component: Registro },
];
