import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServices } from '../services/auth-services';

export const authGuard: CanActivateFn = (route, state) => {

  const servicioAuth = inject(AuthServices);
  const router = inject(Router);

  if(servicioAuth.sesionIniciada()){
    return true;
  }
  return router.parseUrl('/login');

};
