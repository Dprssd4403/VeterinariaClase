import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consulta } from './features/consulta/consulta';
import { Mascotas } from './shared/mascotas/mascotas';
import { Registro } from './features/registro/registro';
import { Contacto } from './features/contacto/contacto';
import { FormularioCuenta } from './shared/formulario-cuenta/formulario-cuenta';
import { Login } from './features/login/login';
import { authGuard } from './guards/auth-guard';
import { authGuardDeactivate } from './guards/guard-candeactived-guard';
import { adminGuard } from './guards/match-guard';
import { adminChildGuard } from './guards/active-child-guard';



export const routes: Routes = [

    //1. Ruta Inicial
    { path: '', component: Home },
    //2. Rutas de navegacion
    { path: 'acerca', component: Acerca },
    { path: 'consulta', component: Consulta },

    { path: 'registro', component: Registro, canActivate: [authGuard], canDeactivate: [authGuardDeactivate]},
    { path: 'contacto', component: Contacto},
    { path: 'cuenta', component:FormularioCuenta},
    { path: 'login', component: Login},
    {
        path: 'admin',
        canActivateChild: [adminChildGuard],
        children: [
            {
                path: 'mascota',
                component: Mascotas,
                canMatch: [adminGuard]
            }
        ]
    },
    //FINAL
    //3.Redireccion si el usuario escribe una url que no existe
    //{path:'**', component:Pagina404}

];
